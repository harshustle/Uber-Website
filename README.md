# Uber Website

// ...existing content...

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

// ...existing content...
