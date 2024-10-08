const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        console.log(req.user);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllUsers }