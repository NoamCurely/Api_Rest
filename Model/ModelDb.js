const Sequelize = require("sequelize");
const dotenv = require("dotenv").config()

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: "localhost",
        dialect: "mysql"
    }
);

const db = {};

db.Sequelize = Sequelize;
db.Sequelize = sequelize;

module.exports = db;