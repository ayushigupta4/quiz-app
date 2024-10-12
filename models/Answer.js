import { DataTypes } from "sequelize";
import sequelize from './index.js';
import Question from "./Question.js";

const Answer = sequelize.define('Answer', {
    text: {type: DataTypes.STRING,
        allowNull: false,
    }
});

Answer.belongsTo(Question);
Question.hasMany(Answer);

export default Answer;