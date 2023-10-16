const Sequelize = require("sequelize");
const dotenv = require("dotenv").config()

//connexion à la db informations dans le .env
const sequelize = new Sequelize({ 
  database: process.env.DB,
  username: process.env.USER,
  password: process.env.PASSWORD,
  dialect: "mysql",
  host: "localhost"
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error + "Premiere connection db");
});

module.exports = sequelize;