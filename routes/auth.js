const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

// REGISTER
router.post('/register', async (req, res) => {
    const userObject = req.body;

    try {
        // Creating a new hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userObject.password, salt);

        // Creating a new user
        const newUser = new User({
            username: userObject.username,
            email: userObject.email,
            password: hashedPassword
        });

        // Save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;