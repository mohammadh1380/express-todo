require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const User = require('../models/account/userModel')(sequelize, DataTypes)



User.findAll().then((user) => {
    console.log(user)
})

