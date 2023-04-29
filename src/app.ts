// Errors
require("express-async-errors");

// Load environment variables from .env file
import dotenv = require('dotenv');
dotenv.config();

// Import required modules
import express from 'express';
import cors = require('cors')
import morgan = require('morgan')
import helmet from "helmet";
import I18n = require("i18n");
import cookieParser = require('cookie-parser')

// Import application configuration
import appConfig from './config/app';
import localesConfig from './config/locales';
import router from './routes/router';
import db from './config/database';
import errorHandler from './services/errorHandler';

// Create Express app
const app = express();

// Configure app to use cookie-parser middleware
app.use(cookieParser());
app.use(cors( {credentials: true, origin: '*'} ));

// Configure app to use body parser middleware
app.use(express.json());

// Route protection for the application
app.use(helmet());

// Cors
app.use(cors());

// Locales
I18n.configure({
  locales: localesConfig.locales,
  directory:  __dirname + localesConfig.directory,
  defaultLocale: localesConfig.defaultLocale
});
app.use(I18n.init);

// Configure app to use router for all routes
app.use(`/${appConfig.routePrefix}`, router);

// Error handler
app.use(errorHandler.notFound);
app.use(errorHandler.handler);

// Database
db.connect();

// Debug
app.use(morgan('tiny'));

// Start listening on specified port
app.listen(appConfig.port, () => {
  console.log(`Server listening at http://localhost:${appConfig.port}`);
});