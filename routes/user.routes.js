const userController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/studentFinderApp/api/v1/users", userController.createUser);

    app.put("/studentFinderApp/api/v1/users/:id" , userController.updateUser );
}