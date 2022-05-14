const User = require('../models/user.model');


exports.createUser = async (req,res) =>{

    const studentObjToBeStoredInDB = {
        name : req.body.name,
        emailId : req.body.emailId,
        linkedInProfile : req.body.linkedInProfile,
        address: {
            type: req.body.address.type,
            coordinates: [
                req.body.address.coordinates[0],
                req.body.address.coordinates[1]
            ]
        }
    }
    console.log(req.body.address);
    try{
        const student = await User.create(studentObjToBeStoredInDB);

        console.log("User Created",student);

        res.status(201).send(student);
    }catch(err){
        console.error("Error while creating new Student", err.message);
        res.status(500).send({
            message : "some internal error while inserting new Student"
        })
    }
}


exports.updateUser = async(req,res) =>{
    try{
        const student = await User.findOne({
        _id: req.params.id
        });

        if (student == null) {
            return res.status(200).send({
                message: "student doesn't exist"
            })
        }
        // Update the attributes of the student update

        student.name = req.body.name != undefined ? req.body.name : student.name;
        student.emailId = req.body.emailId != undefined ? req.body.emailId : student.emailId;
        student.linkedInProfile = req.body.linkedInProfile != undefined ? req.body.linkedInProfile : student.linkedInProfile;
        student.address = req.body.address != undefined ? req.body.address : student.address;
        student.address.coordinates[0] = req.body.address.coordinates[0] != undefined ? req.body.address.coordinates[0] : student.address.coordinates[0];
        student.address.coordinates[1] = req.body.address.coordinates[1] != undefined ? req.body.address.coordinates[1] : student.address.coordinates[1];
        const updateStudent = await user.save();

        // Return the updated student

        return res.status(200).send(updateStudent);
    }catch(err){
        console.error("Error while updating  Student", err.message);
        res.status(500).send({
            message : "some internal error while updating new Student"
        })
    }
}


