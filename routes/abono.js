const express = require('express');
const router = express.Router();
const checkRol = require('../middleware/rol');
const authMiddleware = require('../middleware/session');
const { createAbono, getAbono, updateAbono, deleteAbono, getAbonos } = require('../controllers/abono');

router.post('/create',
    authMiddleware,
    checkRol(['admin']),
    createAbono);

router.post('/unique',
    authMiddleware,
    checkRol(['admin']),
    getAbono);

router.post('/update',
    authMiddleware,
    checkRol(['admin']),
    updateAbono);

router.delete('/delete',
    authMiddleware,
    checkRol(['admin']),
    deleteAbono);

router.get('/all',
    authMiddleware,
    checkRol(['admin']),
    getAbonos);

module.exports = router;