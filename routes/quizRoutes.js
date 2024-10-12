import express from 'express';
import { createQuiz, getQuizzes, getQuizDetails, takeQuiz } from '../controllers/quizController';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createQuiz);
router.get('/', getQuizzes);
router.get('/:quizId', getQuizDetails);
router.post('/:quizId/submit', auth, takeQuiz);

export default router;