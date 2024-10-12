//Sync sequelize models to the database
import { Sequelize } from "sequelize";
import db from '../config.js';

const sequelize = new Sequelize(db.development);

try {
    await db.authenticate();
    console.log("Database Connected...");
} catch(err) {
    console.log('Error: ' + err);
}

await sequelize.sync();

export default sequelize;