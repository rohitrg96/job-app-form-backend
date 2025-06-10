import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp');
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(
      `MongoDB connection failed: ${error instanceof Error ? error.message : String(error)}`
    );
    process.exit(1);
  }
};

export default connectDB;
