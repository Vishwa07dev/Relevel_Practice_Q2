
const userController = require("../controllers/user.controller");
const {userCheckPoint} = require("../middlewares");


module.exports = (app)=>{
    
    app.post("/studentFinderApp/api/v1/users", [userCheckPoint.checkFields], userController.signup);
    app.put("/studentFinderApp/api/v1/users/{id}", [userCheckPoint.isUserExists], userController.signup);
    
}