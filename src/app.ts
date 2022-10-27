import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carRouter from './routes/car';
import motorcyclerRouter from './routes/motorcycle';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(motorcyclerRouter)
app.use(errorHandler);

export default app;
