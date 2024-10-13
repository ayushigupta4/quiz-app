import dotenv from 'dotenv';

dotenv.config({path: '.env.local'});

const db = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DBNAME,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        port: process.env.PORT,
    },
};

export default db;