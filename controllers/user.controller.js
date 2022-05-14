/**
 * This file will have all the logic to manipulate the User resource
 */
 const User = require("../models/user.model");


 exports.createUser = async (req, res) => {

    const userObj = {
        name: req.body.name,
        emaildId: req.body.emaildId,
        linkedInProfile: req.body.linkedInProfile,
        address: {
            type: req.body.address.type,
            coordinates: [
                req.body.address.coordinates[0],
                req.body.address.coordinates[1]
            ]
        }
    }
    try {
        const user = await User.create(userObj);
        console.log(user)

        return res.status(201).send(user);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Some internal error"
        })
    }

}
 
 exports.updateUser = async (req, res) => {
 
    const user = await User.findOne({
        _id: req.params.id
    });

    console.log(user);
    if (user == null) {
        return res.status(200).send({
            message: "User doesn't exist"
        })
    }    

    user.name = req.body.name != undefined ? req.body.name : user.name;
    user.emaildId = req.body.emaildId != undefined ? req.body.emaildId : user.emaildId;
    user.linkedInProfile = req.body.linkedInProfile != undefined ? req.body.linkedInProfile : user.linkedInProfile;
    user.address.type = req.body.address.type != undefined ? req.body.address.type : user.address.type;
    user.address.coordinates[0] = req.body.address.coordinates[0] != undefined ? req.body.address.coordinates[0] : user.address.coordinates[0];
    user.address.coordinates[1] = req.body.address.coordinates[1] != undefined ? req.body.address.coordinates[1] : user.address.coordinates[1];
    
    const updatedUser = await user.save();

    // Return the updated ticket

    return res.status(200).send(updatedUser);
 }