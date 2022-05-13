const User = require("../models/user.model");


checkFields = async (req, res, next) => {
    
    if(!(req.body.name && req.body.emailId && req.body.linkedInProfile && req.body.address)) {
        return res.status(400).send({
            message: "All fields required"
        });
    }
    next();

};
isUserExists = async (req, res, next) => {
    const userId = req.params.id;

    const user = await User.find({
        _id: userId
    });

    if(user.length == 0 || user == null) {
        return res.status(404).send({
            message: "User not found",
        });
    }
    next();
}
const authUser = {
    isUserExists: isUserExists,
    checkFields: checkFields
    
};

module.exports = authUser;