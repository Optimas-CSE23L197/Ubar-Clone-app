# User Registration Endpoint

## `/user/register`

This endpoint allows new users to register by providing necessary details such as their full name, email, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned, allowing the user to authenticate in subsequent requests.

### **Request:**

- **Method:** `POST`
- **URL:** `/user/register`

#### **Request Body:**

The request body must be in JSON format and contain the following fields:

- **email**: (string) The email address of the user. It must be a valid email.
- **fullname**: (object) Contains the user's full name.
  - **firstname**: (string) The user's first name. It must be at least 3 characters long.
  - **lastname**: (string) The user's last name. It must be at least 3 characters long.
- **password**: (string) The user's password. It must be at least 4 characters long.

**Example Request Body:**
```json
{
  "email": "example@domain.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

## `/user/login` Endpoint

This endpoint allows existing users to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated and returned, allowing the user to authenticate in subsequent requests.

### **Request:**

- **Method:** `POST`
- **URL:** `/user/login`

#### **Request Body:**

The request body must be in JSON format and contain the following fields:

- **email**: (string) The email address of the user. It must be a valid email.
- **password**: (string) The user's password. It must be at least 4 characters long.

**Example Request Body:**
```json
{
  "email": "example@domain.com",
  "password": "password123"
}
```

## `/user/profile` Endpoint

This endpoint allows authenticated users to retrieve their profile information.

### **Request:**

- **Method:** `GET`
- **URL:** `/user/profile`
- **Headers:**
  - **Authorization:** `Bearer <token>`

### **Response:**

- **Status:** `200 OK`
- **Body:** JSON object containing the user's profile information.

**Example Response:**
  ```json
  {
  "fullname": {
    "firstname": "test_name",
    "lastname": "test_lastname"
  },
  "_id": "67xxecxx1681e6xx88421xxx",
  "email": "test@gmail.com",
  "__v": 0
}
```

## `/user/logout` Endpoint

This endpoint allows authenticated users to log out by invalidating their session token.

### **Request:**

- **Method:** `GET`
- **URL:** `/user/logout`
- **Headers:**
  - **Authorization:** `Bearer <token>`

### **Response:**

- **Status:** `200 OK`
- **Body:** JSON object confirming successful logout.

**Example Response:**
```json
{
  "message": "Successfully logged out"
}
```

# Captain Registration Endpoint

## `/captain/register`

This endpoint allows new captains (drivers) to register by providing necessary details such as their full name, email, password, and vehicle information. Upon successful registration, a JSON Web Token (JWT) is generated and returned.

### **Request:**

- **Method:** `POST`
- **URL:** `/captain/register`

#### **Request Body:**

The request body must be in JSON format and contain the following fields:

- **email**: (string) The captain's email address. Must be a valid email.
- **fullname**: (object) Contains the captain's full name.
  - **firstname**: (string) The captain's first name. Must be at least 3 characters long.
  - **lastname**: (string) The captain's last name.
- **password**: (string) The captain's password. Must be at least 6 characters long.
- **vehicle**: (object) Contains the vehicle information.
  - **color**: (string) Vehicle color. Must be at least 3 characters long.
  - **plate**: (string) Vehicle plate number. Must be at least 3 characters long.
  - **capacity**: (number) Vehicle passenger capacity. Must be at least 1.
  - **typeVehicle**: (string) Type of vehicle. Must be either 'car', 'motorcycle', or 'auto'.

**Example Request Body:**
```json
{
  "email": "captain@domain.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "securepassword",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "typeVehicle": "car"
  }
}
```

# Captain Login Endpoint

## `/captain/login`

This endpoint allows existing captains (drivers) to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated and returned.

### **Request:**

- **Method:** `POST`
- **URL:** `/captain/login`

#### **Request Body:**

The request body must be in JSON format and contain the following fields:

- **email**: (string) The captain's email address. Must be a valid email.
- **password**: (string) The captain's password. Must be at least 6 characters long.

**Example Request Body:**
```json
{
  "email": "captain@domain.com",
  "password": "securepassword"
}
```

## `/captain/profile` Endpoint

This endpoint allows authenticated captains to retrieve their profile information, including vehicle details and current status.

### **Request:**

- **Method:** `GET`
- **URL:** `/captain/profile`
- **Headers:**
  - **Authorization:** `Bearer <token>`

### **Response:**

- **Status:** `200 OK`
- **Body:** JSON object containing the captain's profile information.

**Example Response:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "captain@domain.com",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "typeVehicle": "car"
  },
  "status": "active"
}
```

