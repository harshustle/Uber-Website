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

# Ride Routes Documentation

## Create Ride

### POST /create

**Description:** Creates a new ride.

**Request Body:**
```json
{
  "pickup": "string",
  "destination": "string",
  "vehicleType": "string"
}
```

**Validations:**
- `pickup` must be a valid string with at least 3 characters.
- `destination` must be a valid string with at least 3 characters.
- `vehicleType` must be one of `['auto', 'car', 'moto']`.

**Responses:**
- `201 Created`: Returns the created ride.
- `400 Bad Request`: If any validation fails.

## Get Fare

### GET /get-fare

**Description:** Retrieves the fare for a ride.

**Query Parameters:**
- `pickup`: A string representing the pickup location.
- `destination`: A string representing the destination location.

**Validations:**
- `pickup` must be a valid string with at least 3 characters.
- `destination` must be a valid string with at least 3 characters.

**Responses:**
- `200 OK`: Returns the fare for the ride.
- `400 Bad Request`: If any validation fails.

## Confirm Ride

### POST /confirm

**Description:** Confirms a ride.

**Request Body:**
```json
{
  "rideId": "string"
}
```

**Validations:**
- `rideId` must be a valid MongoDB ObjectId.

**Responses:**
- `200 OK`: Returns the confirmed ride.
- `400 Bad Request`: If any validation fails.

## Start Ride

### GET /start-ride

**Description:** Starts a ride.

**Query Parameters:**
- `rideId`: A string representing the ride ID.
- `otp`: A string representing the OTP.

**Validations:**
- `rideId` must be a valid MongoDB ObjectId.
- `otp` must be a valid string with exactly 6 characters.

**Responses:**
- `200 OK`: Returns the started ride.
- `400 Bad Request`: If any validation fails.

## End Ride

### POST /end-ride

**Description:** Ends a ride.

**Request Body:**
```json
{
  "rideId": "string"
}
```

**Validations:**
- `rideId` must be a valid MongoDB ObjectId.

**Responses:**
- `200 OK`: Returns the ended ride.
- `400 Bad Request`: If any validation fails.

# Map Routes Documentation

## Get Coordinates

### GET /maps/get-coordinates

**Description:** Retrieves the coordinates for a given address.

**Query Parameters:**
- `address`: A string representing the address.

**Validations:**
- `address` must be a valid string with at least 3 characters.

**Responses:**
- `200 OK`: Returns the coordinates for the address.
- `400 Bad Request`: If any validation fails.
- `404 Not Found`: If coordinates are not found.

## Get Distance and Time

### GET /maps/get-distance-time

**Description:** Retrieves the distance and time between two locations.

**Query Parameters:**
- `origin`: A string representing the origin location.
- `destination`: A string representing the destination location.

**Validations:**
- `origin` must be a valid string with at least 3 characters.
- `destination` must be a valid string with at least 3 characters.

**Responses:**
- `200 OK`: Returns the distance and time between the locations.
- `400 Bad Request`: If any validation fails.
- `404 Not Found`: If no routes are found.

## Get AutoComplete Suggestions

### GET /maps/get-suggestions

**Description:** Retrieves autocomplete suggestions for a given input.

**Query Parameters:**
- `input`: A string representing the input query.

**Validations:**
- `input` must be a valid string with at least 3 characters.

**Responses:**
- `200 OK`: Returns the autocomplete suggestions.
- `400 Bad Request`: If any validation fails.
- `404 Not Found`: If no suggestions are found.

# Server Documentation

## Server Initialization

The server is initialized using the `http` module and the Express app. The socket is also initialized with the server.

**File:** `/backend/server.js`

**Code:**
```javascript
const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

# Socket Documentation

## Socket Initialization

The socket is initialized using the `socket.io` library. It handles various events such as connection, join, update-location-captain, and disconnect.

**File:** `/backend/socket.js`

**Code:**
```javascript
const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const { userId, userType } = data;

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });

        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {
    console.log(messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };
```

