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
    console.log(`Connecting to MongoDB...`);
    console.log(`Connection Successful`);


    await User.collection.drop();// Since this a dev setup

    const user = await User.create({
        name: "Albert Einstein",
        userId: "admin",
        email: "albert@einstien.com",
        type: constant.userTypes.admin,
        address: {
            type: "Point",
            coordinates: [10.2345678, 12.96857644]
        }
    });
    console.log("admin created", user);

});

app.listen(serverConfig.PORT, () => {
    console.log(`Albert Einstein App listening on port ${serverConfig.PORT}`);
})