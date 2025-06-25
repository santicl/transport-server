const express = require('express');
const { registerCrlt } = require('../controllers/auth');
const registerEmailExist = require('../controllers/register');
const { validatorRegister } = require('../validators/auth');
const router = express.Router();

router.post('/', validatorRegister, registerEmailExist, registerCrlt);


module.exports = router;