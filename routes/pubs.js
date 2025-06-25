const express = require('express');
const router = express.Router();
const { createPub, updatePub, deletePub, getPub, getPubs } = require('../controllers/pubs');
const checkRol = require('../middleware/rol');
const authMiddleware = require('../middleware/session');

router.post('/create',
    authMiddleware,
    checkRol(['admin']),
    createPub);

router.post('/',
    authMiddleware,
    checkRol(['admin']),
    updatePub);

router.post('/',
    authMiddleware,
    checkRol(['admin']),
    deletePub);

router.post('/',
    authMiddleware,
    checkRol(['admin']),
    getPub);

router.post('/all',
    authMiddleware,
    checkRol(['admin']),
    getPubs);

module.exports = router;