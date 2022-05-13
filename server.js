const express = require('express');
const serverConfig = require('./configs/serverConfig');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./configs/dbConfig');



// create express server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// connect database to server
mongoose.connect(dbConfig.DB_URL, () => {
    console.log("MongoDB connected.");

})


// start express server
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on port", serverConfig.PORT);
})
