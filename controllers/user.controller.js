const User = require('../models/user.model');


// create user
exports.createUser = async (req, res) => {
    try {

        const user = await User.create(req.body);

        res.status(201).send(user);
    } catch (err) {
        console.log(err.stack);
        res.status(500).send({
            message: "Some Internal server error"
        })
    }
}

// update user
exports.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        // if user exist or not
        if (!user) {
            return res.status(404).send({
                message: "User doesn't exists"
            })
        }
        // update user
        user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });

        res.status(200).send(user)
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Some Internal server error"
        })
    }
}