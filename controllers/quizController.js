import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';

export const createQuiz = async (req, res) => {
    const {title, questions } = req.body;
    const quiz = await Quiz.create({ title });

    questions.forEach( async (ques) => {
        const question = await Question.create({text: ques.text, correctAnswer: ques.correctAnswer, QuizId: quiz.id});
        
    });

    res.status(201).json({ message: 'Quiz created', quiz});
};

export const getQuizzes = async (req, res) => {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
};

export const getQuizDetails = async (req, res) => {
    const quiz = await Quiz.findByPK(req.params.quizid, {
        include: {model: Question},
    });
    res.json(quiz);
}

export const takeQuiz = async (req, res) => {
    const { answer } = req.body;
    const quiz = await Quiz.findByPK(req.params.quizid, {
        include: {model: Question},
    });

    let score = 0;
    quiz.Questions.forEach((question, index) => {
        if(question.correctAnswer === answer[index]) score++;
    });

    res.json({ score, total: quiz.Questions.length });
};