const router = require("express").Router();

// Home route of user path
router.get('/', (req, res) => {
    res.send('User Home');
});

module.exports = router;