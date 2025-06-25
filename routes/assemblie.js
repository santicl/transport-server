const express = require('express');
const router = express.Router();
const { getAssemblei, createAssemblei, updateAssemblei, deleteAssemblei, getAssembleis, getAssembleisNotToken } = require('../controllers/assemblie');
const checkRol = require('../middleware/rol');
const authMiddleware = require('../middleware/session');

router.post('/create',
    authMiddleware,
    checkRol(['admin']),
    createAssemblei);

router.post('/unique',
    authMiddleware,
    checkRol(['admin']),
    getAssemblei);

router.post('/update',
    authMiddleware,
    checkRol(['admin']),
    updateAssemblei);

router.delete('/delete',
    authMiddleware,
    checkRol(['admin']),
    deleteAssemblei);

router.get('/all',
    authMiddleware,
    checkRol(['admin']),
    getAssembleis);

router.get('/not-token/:idAssemblei',
    getAssembleisNotToken);

module.exports = router;