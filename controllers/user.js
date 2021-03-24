const User = require("../models/user");


exports.getUsers = (req, res, next) => {
    User.find()
        .then((userList) => {
            //console.log("All the users: " + userList);
            res.send(userList);
        })
        .catch((err) => {
            console.log(err);
        });

};



exports.registerUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const passwordHash = req.body.passwordHash;
    const phone = req.body.phone;
    const isAdmin = req.body.isAdmin;


    const user = new User({
        name: name,
        email: email,
        passwordHash: passwordHash,
        phone: phone,
        isAdmin: isAdmin
    })

    await user.save()
        .then((createdUser) => {
              if (createdUser) {
                return res.status(200).json({
                    success: true,
                    message: "User '" + createdUser.name + "' is registered!"
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "User could not be registered!"
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });

}