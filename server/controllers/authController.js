const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../model/User');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'login' : false,
        'message': 'Username and password are required.' });
    const foundUser = await User.findOne({ username: username });
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = foundUser.comparePassword(password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            "" + process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '4h' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            "" + process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving refreshToken with current username
        foundUser.refreshToken = refreshToken;
        await foundUser.save();
    
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        // ##############################################################
        res.cookie('jwt_access', accessToken , { httpOnly: true, sameSite: 'None', secure: true, maxAge: 4 * 60 * 60 * 1000 });
        res.json({ 
            username : foundUser.username,
            roles,
            accessToken,
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };