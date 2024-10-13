import { DataTypes } from "sequelize";
import sequelize from './index.js';
import Quiz from "./Quiz.js";

const Question = sequelize.define('Question', {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correctAnswer: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

export default Question;