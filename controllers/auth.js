const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");
const { tokenSign } = require("../services/handlerJWT");
const { encrypt, compare } = require("../services/handlerPassword");

const registerCrlt = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = { ...req, password };
        const dataUser = await userModel.create(body);
        dataUser.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        console.log(body)

        res.send({ data });
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_REGISTER_USER');
    }
}

const loginCrlt = async (req, res) => {
    console.log(req)
    try {
        req = matchedData(req)
        const user = await userModel.findOne({ email: req.email });

        console.log(user)
        
        if (!user) {
            handlerErrorHttp(res, 'USER_NOT_EXITS', 404);
            return
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        console.log(hashPassword, check)

        if (!check) {
            handlerErrorHttp(res, 'UNAUTHORIZED_USER', 401);
            return
        }

        const data = {
            token: await tokenSign(user),
            user,
            message: 'OK'
        }

        console.log(data)

        res.status(200).send({ data })
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_LOGIN_USER', 404)
    }
}

module.exports = { registerCrlt, loginCrlt };