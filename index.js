import express from 'express';
const app = express()
import dotenv from "dotenv";
import models, {sequelize} from "./src/models/index.js";
dotenv.config()

sequelize.sync().then(async () => {
    const user = await models.User.create({username: "hamed", password: "password"})
    await user.save()
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}!`);
    });
});
