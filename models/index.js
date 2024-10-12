//Sync sequelize models to the database
import { Sequelize } from "sequelize";
import db from '../config.js';

const sequelize = new Sequelize(db.development);

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Database Connected...");
    } catch(err) {
        console.log('Error: ' + err.message);
    }
}

connectToDatabase();

await sequelize.sync();

export default sequelize;