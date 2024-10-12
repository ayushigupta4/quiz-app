import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Quiz = sequelize.define('Quiz', {
        title: { type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Quiz;