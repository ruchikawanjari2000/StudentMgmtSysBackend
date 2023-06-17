const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
const dbConnection = require('./helpers/mongo_db_connection')


var corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

const port = process.env.API_PORT;
const bodyParser = require("body-parser");
dbConnection();

const userRouter = require("./Routers/user-router")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


