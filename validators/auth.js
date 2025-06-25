const { check } = require('express-validator');
const validatorResults = require('../services/handlerValidator');

const validatorLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().isLength({ min: 5, max: 60 }),
    (req, res, next) => {
        return validatorResults(req, res, next);
    }
];

const validatorRegister = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().isLength({ min: 5, max: 60 }),
    (req, res, next) => {
        return validatorResults(req, res, next);
    }
];

module.exports = { validatorLogin, validatorRegister };