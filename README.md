# Node.js Project with MVC Architecture

This project implements a Node.js backend API using the MVC (Model-View-Controller) architecture, designed to handle user management operations with basic authentication.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- bcryptjs (for password hashing)
- JWT (JSON Web Tokens) for authentication
- Jest (for unit testing)
- dotenv (for environment variables)

## Project Structure

The project follows the MVC (Model-View-Controller) architecture:

- **`/controllers`**: Contains controller functions that handle incoming requests and responses.
- **`/models`**: Defines MongoDB schemas and models using Mongoose.
- **`/routes`**: Defines API routes using Express Router, integrating controllers.
- **`/middleware`**: Contains middleware functions, e.g., for authentication.
- **`/DB`**: Includes database connection setup (`db.js`).
- **`/tests`**: Contains unit tests for controllers and other components.
- **`server.js`**: Main entry point that sets up Express server and integrates routes.

## API Endpoints

- **POST /api/register**: Create a new user.
- **POST /api/login**: Authenticate and receive JWT token.
- **GET /api**: Retrieve all users (requires authentication).
- **GET /api/:id**: Retrieve user by ID (requires authentication).
- **PUT /api/:id**: Update user by ID (requires authentication).
- **PATCH /api/:id**: Partially update user by ID (requires authentication).
- **DELETE /api/:id**: Soft delete user by ID (requires authentication).

## Authentication

- Basic authentication using JWT (JSON Web Tokens):
  - Register a new user (`POST /api/register`).
  - Login and receive a JWT token (`POST /api/login`).
  - Protect endpoints with `verifyToken` middleware to require valid JWT for access.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/bobbyy16/worko-assessment
   cd worko-assessment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a .env file in the root directory and define the following variables:

```bash
PORT=8080
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

4. **Database Setup:**

   Ensure MongoDB is running and accessible with the provided connection string (MONGODB_URI).

5. **Running the APP:**

```bash
    npm start
```

    The server will start at http://localhost:8080/.

## Running Tests

**To run unit tests using Jest:**

```bash
npm test
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository (`git clone <forked-repo-url>`).
3. Create a new branch (`git checkout -b feature/my-feature`).
4. Make your changes and commit them (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Create a new Pull Request.

Thank you for contributing!

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
