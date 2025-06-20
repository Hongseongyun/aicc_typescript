import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

import projectRoutes from './routes/projectRoutes';
import searchRoutes from './routes/searchRoutes';
import taskRoutes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes';

app.get('/', (req, res) => {
  res.send('Home Route Running Successfully!');
});

app.use('/projects', projectRoutes);
app.use('/search', searchRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/teams', teamRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
