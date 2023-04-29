// Import the Router class from the Express module
import { Router } from 'express';

// Create a new instance of the Router class
const router = Router();

// Import the routes
import api from './api';
import auth from './auth';
import user from './user';

// Set up the routes for the application
router.use('', api);
router.use('/auth', auth);
router.use('/user', user);

// Export the router as the default module
export default router;