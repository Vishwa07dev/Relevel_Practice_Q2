
const authController = require("../controllers/auth.controller");
const {authUser} = require("../middlewares");


module.exports = (app)=>{
    
    app.post("/studentFinderApp/api/v1/users", [authUser.checkFields], authController.signup);
    app.put("/studentFinderApp/api/v1/users/{id}", [authUser.isUserExists], authController.signup);
    
}