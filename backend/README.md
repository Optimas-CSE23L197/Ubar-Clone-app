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
