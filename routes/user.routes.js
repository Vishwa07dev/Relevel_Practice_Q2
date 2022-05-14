const userController = require("../controllers/user.controller");

module.exports = (app) => {

    console.log("routes initialised");

    app.post("/studentFinderApp/api/v1/users", userController.createUser);

    app.put("/studentFinderApp/api/v1/users/:id" , userController.updateUser );

    app.get("/studentFinderApp/api/v1/users/" , userController.getUser );
}