const jwt = require('jsonwebtoken');
const { DB_URLS } = require('../config/key');

const JWT_SECRET = DB_URLS.JWT_SECRET;

const tokenSign = async (user) => {
    const sign = await jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '48h',
        }
    );
    
    return sign;
};

const verifyToken = async (tokenJWT) => {
    try {
        return jwt.verify(tokenJWT, JWT_SECRET);
    } catch (err) {
        return null;
    }
}


module.exports = { tokenSign, verifyToken };