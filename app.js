import express from 'express';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import './models/index.js';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/quizzes', quizRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));