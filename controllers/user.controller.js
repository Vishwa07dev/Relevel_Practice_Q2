const constants = require("../utils/constants");
const User = require("../models/user.model");
// const config = require("../configs/auth.config");


exports.signup = async (req, res) => {


    const userObjToBeStoredInDB = {
        name : req.body.name,
        emailId : req.body.email,
        linkedInProfile : req.body.linkedInProfile,
        address: {
            type: req.body.point,
            coordinates: req.body.coordinates
        }
    }

 try {
    const userCreated = await User.create(userObjToBeStoredInDB);

    console.log("user created ", userCreated);

    /**
     * Return the response
     */
    const userCreationResponse  = {
        name : userCreated.name,
        emailId : userCreated.emailId,
        address: userCreated.address
    }
    res.status(201).send(userCreationResponse);
} catch(err){
    console.error("Error while creating new user", err.message);
    res.status(500).send({
        message : "some internal error while inserting new user"
    })
    }
}

exports.updateUser = async (req, res) => {
    try {

    const user = await find({
        _id: req.params.id
    });

   
    user.name = req.body.name != undefined ? req.body.name: user.name;
    user.emailId = req.body.name != undefined ? req.body.name: user.emailId;
    user.address = req.body.address != undefined ? req.body.address: user.address;
    user.linkedInProfile = req.body.linkedInProfile != undefined ? req.body.linkedInProfile: user.linkedInProfile;

    const updatedUserDetails = await user.save();

    return res.status(200).send({
        message: "Successfully updated user details",
        updatedUserDetails: updatedUserDetails
    });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Some internal error occurred while updating user details."
        });
    }
}
