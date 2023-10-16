const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const sequelize = require("./Config/ConnectDb");
const User = require("./Model/UserModel");

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

require("./Routes/UserRoutes")(app);

sequelize.sync();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});