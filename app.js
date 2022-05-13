const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const User = require("./models/user.model");
const constant = require("./utils/constants");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

/**
 * Setup the mongodb connection and create on ADMIN user
 */
mongoose.connect(dbConfig.DB_URL, async () => {
    console.log("MongoDB connected");

    await User.collection.drop();// Since this a dev setup
    try {
        const user = await User.create({
            name: "Vishwa Mohan",
            emaildId: "kankvish@gmail.com",
            userType: constant.userType.admin,
            address: {
                type: "Point",
                coordinates: [14.442599, 79.986458]
            }
        });
        console.log("admin created", user);
    } catch (err) {
        console.log(err.message);
    }


})

/**
 * Start the express server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on the port ", serverConfig.PORT);
})