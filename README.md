Node.js Authentication and User Management API
Description
This is a Node.js application providing authentication and user management functionalities. The app uses Express.js for routing, Sequelize ORM for MySQL database interaction, and SendGrid for email notifications. It includes endpoints for user registration, login, password reset, and profile management, along with admin functionalities to fetch user details.

Features
User Registration: Allows new users to register.
User Login: Authenticates users and provides a JWT token.
Password Reset: Users can request and reset their password using a secure token.
Profile Management: Users can view and update their profile.
Admin Dashboard: Admins can fetch a list of all users.
Technologies Used
Node.js: Runtime environment for building the server.
Express.js: Framework for building the RESTful API.
Sequelize: ORM for interacting with the MySQL database.
SendGrid: Service for sending email notifications.
jsonwebtoken: Library for generating and verifying JWT tokens.
bcrypt: Library for hashing and comparing passwords.
crypto: Node.js module for generating secure tokens.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

env
Copy code
PORT=3000
DEV_API_PORT=3001
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_uri
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_SENDER_EMAIL=your_sender_email
SALT_ROUNDS=10
Run database migrations:

Ensure that your database is properly configured and migrate any required schemas.

Start the server:

bash
Copy code
npm start
API Endpoints
Authentication
POST /auth/register

Registers a new user. Requires fullName, email, and password in the request body.

POST /auth/login

Logs in a user and provides a JWT token. Requires email and password in the request body.

POST /auth/request-password-reset

Requests a password reset. Requires email in the request body.

POST /auth/reset-password/

Resets the password using the provided token. Requires password in the request body.

User
GET /user/profile

Retrieves the profile of the currently authenticated user. Requires a valid JWT token in the Authorization header.

POST /user/profile

Updates the profile of the currently authenticated user. Requires a valid JWT token in the Authorization header and profile data in the request body.

Admin
GET /admin/fetch-users

Fetches all users. Requires a valid JWT token with admin role in the Authorization header.

Middleware
Authentication Middleware: Verifies JWT tokens for protected routes.
Authorization Middleware: Ensures users have the required role to access certain routes.
Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.

License
This project is licensed under the MIT License.
