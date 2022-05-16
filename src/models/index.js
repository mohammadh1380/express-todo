import {Sequelize} from "sequelize";
import dotenv from "dotenv";
import user from './account/userModel.js';
import task from './todo/task-model.js';
dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'postgres',
    },
);

const models = {
    User: user(sequelize, Sequelize),
    Task: task(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };

export default models;

