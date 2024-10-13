import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';

export const createQuiz = async (req, res) => {
    const {title, questions } = req.body;


    if (!title || !questions || questions.length === 0) {
        return res.status(400).json({ error: 'Title and questions are required' });
    }

    try {
        const quiz = await Quiz.create({ title });

        const questionPromises = questions.map(ques => 
            Question.create({ text: ques.text, correctAnswer: ques.correctAnswer, QuizId: quiz.id})
        );

        await Promise.all(questionPromises);

        res.status(201).json({ message: 'Quiz created', quiz});
    } catch(err) {
        res.status(500).json({error: "Failed to create quiz", details: err.message});
    }

    
};

export const getQuizzes = async (req, res) => {
    console.log("getQuizees: I am called!!!!!");
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
};

export const getQuizDetails = async (req, res) => {
    const quizId = req.query.quizId;

    if(!quizId) {
        return res.status(400).json({error: 'Quiz ID is required'});
    }

    try {
        const quiz = await Quiz.findOne({
            where: { id: quizId },
            include: [{ model: Question }]
        });

        if(!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        res.json(quiz);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
    
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