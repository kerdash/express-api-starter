import promiseRouter from 'express-promise-router';

// Create a new instance of the Router class
const router = promiseRouter();

// Import the routes
import routerV1 from './v1/router';

// Set up the routes for the application
router.use('/v1', routerV1);

// Export the router as the default module
export default router;