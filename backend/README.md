# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password. Optionally, a socket ID can also be provided.

### Request Body
The request body should be a JSON object with the following properties:
- `fullName`: An object containing:
  - `firstName`: A string representing the user's first name (minimum 3 characters).
  - `lastName`: A string representing the user's last name (minimum 3 characters).
- `email`: A string representing the user's email address.
- `password`: A string representing the user's password (minimum 6 characters).
- `socketId` (optional): A string representing the user's socket ID.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "socketId": "socket123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**: A JSON object containing the created user and an authentication token.

Example:
```json
{
  "user": {
    "_id": "60c72b2f9b1d4c3a4c8e4e3b",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "socket123"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing the validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "first name must be atleast 3 character long",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "last name must be atleast 3 character long",
      "param": "fullName.lastName",
      "location": "body"
    },
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Invalid value",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Error Handling
The error responses are designed to provide clear and concise information about what went wrong. Validation errors will specify which fields are invalid and why. Server errors will return a generic message indicating an internal issue.

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object with the following properties:
- `email`: A string representing the user's email address.
- `password`: A string representing the user's password (minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**: A JSON object containing the user and an authentication token.

Example:
```json
{
  "user": {
    "_id": "60c72b2f9b1d4c3a4c8e4e3b",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "socket123"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing the validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Invalid value",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Error Handling
The error responses are designed to provide clear and concise information about what went wrong. Validation errors will specify which fields are invalid and why. Authentication errors will indicate incorrect email or password. Server errors will return a generic message indicating an internal issue.

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to retrieve the profile of the authenticated user.

### Request Headers
- `Authorization`: A string containing the Bearer token.

Example:
```
Authorization: Bearer <token>
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the user's profile information.

Example:
```json
{
  "user": {
    "_id": "60c72b2f9b1d4c3a4c8e4e3b",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "socket123"
  }
}
```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Error Handling
The error responses are designed to provide clear and concise information about what went wrong. Authentication errors will indicate missing or invalid tokens. Server errors will return a generic message indicating an internal issue.

# User Logout Endpoint

## GET /users/logout

### Description
Logout the current user and blacklist the token provided in cookie or headers

### Request Headers
- `Authorization`: A string containing the Bearer token.

Example:
```
Authorization: Bearer <token>
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "Logged out successfully"
}
```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**: A JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Error Handling
The error responses are designed to provide clear and concise information about what went wrong. Authentication errors will indicate missing or invalid tokens. Server errors will return a generic message indicating an internal issue.

# Captain
## Captain Routes Documentation

### Register Captain

**Endpoint:** `/register`  
**Method:** `POST`  
**Description:** Registers a new captain.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}
```

**Validations:**
- `email` must be a valid email.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.
- `vehicle.color` must be at least 3 characters long.
- `vehicle.plate` must be at least 3 characters long.
- `vehicle.capacity` must be at least 1.
- `vehicle.vehicleType` must be one of `['car', 'motorcycle', 'auto']`.

**Responses:**
- `201 Created`: Returns the created captain and authentication token.
- `400 Bad Request`: If any validation fails or captain already exists.

### Login Captain

**Endpoint:** `/login`  
**Method:** `POST`  
**Description:** Logs in an existing captain.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Validations:**
- `email` must be a valid email.
- `password` must be at least 6 characters long.

**Responses:**
- `200 OK`: Returns the logged-in captain and authentication token.
- `400 Bad Request`: If any validation fails.
- `401 Unauthorized`: If email or password is incorrect.

### Get Captain Profile

**Endpoint:** `/profile`  
**Method:** `GET`  
**Description:** Retrieves the profile of the authenticated captain.

**Headers:**
- `Authorization`: Bearer token.

**Responses:**
- `200 OK`: Returns the captain profile.
- `401 Unauthorized`: If the captain is not authenticated.

### Logout Captain

**Endpoint:** `/logout`  
**Method:** `GET`  
**Description:** Logs out the authenticated captain.

**Headers:**
- `Authorization`: Bearer token.

**Responses:**
- `200 OK`: Returns a success message.
- `401 Unauthorized`: If the captain is not authenticated.

