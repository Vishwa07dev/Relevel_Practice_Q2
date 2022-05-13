const User = require("../models/user.model");
const Constants = require("../utils/constants");


checkFields = async (req, res, next) => {
    
    if(!(req.body.name && req.body.emailId && req.body.linkedInProfile && req.body.address)) {
        return res.status(200).send({
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
        return res.status(500).send({
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