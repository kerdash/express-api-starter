import mongoose from "mongoose";
import logger from '../utils/logger';

const { DEVELOPMENT, MONGO_URI } = process.env;

const db = {
  connect: function() {
    mongoose.connect(MONGO_URI || '')
    .then(() => {
      if(DEVELOPMENT=='true') logger.info(`Connected to MongoDB database: ${mongoose.connection.name}`);
    })
    .catch((error: Error) => {
      if(DEVELOPMENT=='true') logger.info("Database connection failed. Exiting now...");
      console.error(error);
      process.exit(1);
    });
  }
};

export default db;