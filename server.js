/**
 * This file will be the start point of the application.
 */
 const express = require('express');
 const mongoose = require('mongoose');
 const dbConfig = require('./configs/db.config');
 const serverConfig = require('./configs/server.config');
 const bodyParser = require("body-parser");

 /**
 * DB Connection initialization
 */
mongoose.connect(dbConfig.DB_URL, () => {
  console.log("connected to Mongo DB ")
  init();
}, err => {
  console.log("Error :", err.mssage)
}
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
/**
 * importing the routes
 */
 require('./routes/auth.routes')(app);
 
 
 app.listen(serverConfig.PORT, () => {
     console.log(`Application started on the port num : ${serverConfig.PORT}`);
 })