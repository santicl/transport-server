const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");

const registerEmailExist = async (req, res, next) => {

    req = matchedData(req);
    const user = await userModel.findOne({ email: req.email });
    console.log(req.email, user);

    if (user) {
        handlerErrorHttp(res, 'USER_ALREADY_EXIST', 406);
        return
    }
    next()
}

module.exports = registerEmailExist;