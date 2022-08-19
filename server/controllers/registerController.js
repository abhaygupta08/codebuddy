// const fsPromises = require('fs').promises;
// const path = require('path');
// const bcrypt = require('bcrypt');
const User = require('../model/User');

const handleNewUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: username });
    console.log(duplicate);
    if (duplicate) return res.sendStatus(409); //Conflict 
    try {
        const newUser = new User({
            "username": username,
            "roles": { "User": 2001 },
            "password": password
        });
        const savedUser = await newUser.save();
        res.status(201).json({ 'success': `New username ${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };