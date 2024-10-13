//Sync sequelize models to the database
import { Sequelize } from "sequelize";
import db from '../config.js';

const sequelize = new Sequelize(db.development);

async function syncToDatabase() {
    try {
        await sequelize.sync();
        console.log("Database Connected...");
    } catch(err) {
        console.log('Error: ' + err.message);
    }
}

syncToDatabase();


export default sequelize;