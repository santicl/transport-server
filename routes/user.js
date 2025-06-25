const express = require('express');
const router = express.Router();
const checkRol = require('../middleware/rol');
const authMiddleware = require('../middleware/session');
const { createUser, updateUser, deleteUser, getUser, getUsers } = require('../controllers/user');

router.post('/',
    authMiddleware,
    checkRol(['admin']),
    createUser);

router.get('/',
    authMiddleware,
    checkRol(['admin']),
    updateUser);

router.get('/',
    authMiddleware,
    checkRol(['admin']),
    deleteUser);

router.post('/session',
    authMiddleware,
    checkRol(['admin']),
    getUser);

router.get('/',
    authMiddleware,
    checkRol(['admin']),
    getUser);

router.get('/',
    authMiddleware,
    checkRol(['admin']),
    getUsers);

module.exports = router;