const { createUser, updateUser } = require("../controllers/user.controller")




module.exports = (app) => {
    // create user
    app.post("/rangefinder/api/v1/users", createUser)
    //update user
    app.put("/rangefinder/api/v1/users", updateUser)
}