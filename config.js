require('dotenv').config({path: '.env.local'});

const db = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DBNAME,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    },
};

export default db;