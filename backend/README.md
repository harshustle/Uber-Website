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
