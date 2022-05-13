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
                req.body.address.long,
                req.body.address.lat
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
 
 
 /**
  * Update the user - status , userType
  *    - only ADMIN should be allowed to do this
  * 
  * ADMIN  - name , userStatus, userType
  *  
  */
 exports.updateUser = async (req, res) => {
 
    const user = await User.findOne({
        _id: req.params.id
    });

    if (ticket == null) {
        return res.status(200).send({
            message: "User doesn't exist"
        })
    }    

    user.name = req.body.name != undefined ? req.body.name : user.name;
    user.emaildId = req.body.emaildId != undefined ? req.body.emaildId : user.emaildId;
    user.linkedInProfile = req.body.linkedInProfile != undefined ? req.body.linkedInProfile : user.linkedInProfile;
    user.addres.type = req.body.addres.type != undefined ? req.body.addres.type : user.addres.type;
    user.addres.coordinates[0] = req.body.addres.coordinates[0] != undefined ? req.body.addres.coordinates[0] : user.addres.coordinates[0];
    user.addres.coordinates[1] = req.body.addres.coordinates[1] != undefined ? req.body.addres.coordinates[1] : user.addres.coordinates[1];
    
    const updatedUser = await user.save();

    // Return the updated ticket

    return res.status(200).send(updatedUser);
 }