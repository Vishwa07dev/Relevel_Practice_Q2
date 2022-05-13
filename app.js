const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const User = require("./models/user.model");
const bcrypt = require("bcryptjs");
const constant = require("./utils/constants");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

/**
 * Setup the mongodb connection and create on ADMIN user
 */
mongoose.connect(dbConfig.DB_URL, async () => {
    console.log(`Connecting to MongoDB...`);
    console.log(`Connection Successful`);


    await User.collection.drop();// Since this a dev setup

    const user = await User.create({
        name: "Albert Einstein",
        userId: "admin",
        password: bcrypt.hashSync("password", 8),
        email: "albert@einstien.com",
        userType: constant.userTypes.admin
    });
    console.log("admin created", user);

});



app.listen(serverConfig.PORT, () => {
    console.log(`Albert Einstein App listening on port ${serverConfig.PORT}`);
})