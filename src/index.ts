import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import formRoutes from './routes/form.routes';
import cors from 'cors';
import connectDB from './config/db';
import { rateLimiter } from './middleware/rateLimiter';
import logger from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(rateLimiter);

// Database connection
connectDB();

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Job form API');
});

app.use('/api/forms', formRoutes);

// 404 Not Found middleware
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 404,
    message: 'Route not found',
  });
});

app.listen(PORT, () => logger.info(`Server started on ${PORT}`));

export default app;
