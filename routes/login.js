const express = require('express');
const { loginCrlt } = require('../controllers/auth');
const { validatorLogin } = require('../validators/auth');
const router = express.Router();

router.post('/', validatorLogin, loginCrlt);

module.exports = router;