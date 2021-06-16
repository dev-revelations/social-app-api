const router = require("express").Router();
const User = require("../models/User");

router.post('/register', async (req, res) => {
    const userObject = req.body;
    const newUser = new User({
        username: userObject.username,
        email: userObject.email,
        password: userObject.password
    });

    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;