# Express API Starter
This is a starter project for building an Express API using TypeScript. It includes several useful libraries and packages to help you get started quickly.

## Getting Started
To get started with this project, you'll need to do the following:

Clone the repository: git clone https://github.com/kerdash/express-api-starter
Install the dependencies: npm install or yarn install
Start the server: npm start or yarn start
Navigate to http://localhost:3000 to see the server running

## Scripts
This project includes several scripts to help you develop and run the server:

- npm run start or yarn start: starts the server using ts-node and logs requests using pino-pretty.

- npm run dev or yarn dev: starts the server using nodemon and logs requests using pino-pretty.

- npm run lint or yarn lint: runs the linter using eslint.
- npm run lint:fix or yarn lint:fix runs the linter and fixes any fixable issues using eslint --fix.

## Libraries and Packages
This project includes several useful libraries and packages, including:

- cors: middleware to enable CORS.
- dotenv: loads environment variables from a .env file.
- express: web framework for Node.js.
- express-async-errors: middleware to handle errors in async functions.
- express-promise-router: router for handling promises in Express.
- express-validator: middleware for validating and sanitizing input.
- helmet: middleware to add security headers.
- i18n: internationalization library.
- jsonwebtoken: library for creating and verifying JSON Web Tokens.
- mongoose: object modeling library for MongoDB.
- morgan: middleware for logging HTTP requests.
- nodemailer: library for sending emails.
- pino: fast and low overhead logger.
- pino-pretty: pretty-printer for Pino logs.
- winston: versatile logging library.

## Auth
This project includes features for user authentication, including:

- User sign up: users can create a new account by providing their name, email, and password.
- User login: users can log in to their account by providing their email and password.
- Password reset: users can reset their password code sent to their email.

## cp .env.sample .env
This project includes a .env.sample file that contains sample environment variables. To use this file, copy it to a new file called .env using the following command:
`cp .env.sample .env`
This command copies the contents of the .env.sample file to a new file called .env in the same directory. You can then customize the environment variables in the .env file to fit your needs.

## Developed By
** Hassan Kerdash **

# License
This project is licensed under the MIT license. See the LICENSE file for more information.