const { userModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");
const { verifyToken } = require("../services/handlerJWT");

const authMiddleware = async (req, res, next) => {
    console.log(req.body)
    //console.log(req.body, req.headers.authorization)
    try {
        
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'NOT_AUTHORIZATION_NOT_TOKEN' })
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if (dataToken === null) {
            return res.status(401).json({message : 'SESSION_EXPIRES'})
        }

        if (!dataToken._id) {
            return res.status(403).json({ message: 'NOT_USER_ID' })
        }

        const user = await userModel.findById(dataToken._id);

        if (req.body.role && user.role !== 'admin' && req.body.role !== user.role) {
            return handlerErrorHttp(res, 'NOT_AUTHORIZATION', 401);
        }

        req.user = user;

        next();
    } catch (err) {
        handlerErrorHttp(res, 'NOT_AUTHORIZATION', 401);
    }
}

module.exports = authMiddleware;