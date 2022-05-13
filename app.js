const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/db.config");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(dbConfig.DB_URL, async () => {
    console.log(`Connecting to MongoDB...`);
    console.log(`Connection Successful`);
})


app.listen(serverConfig.PORT, () => {
    console.log(`Albert Einstein App listening on port ${serverConfig.PORT}`);
})