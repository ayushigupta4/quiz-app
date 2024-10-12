import { DataTypes } from 'sequelize';
import sequelize from './index';

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default User;