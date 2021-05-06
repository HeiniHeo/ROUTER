const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/',controller.user);
router.get('/join',controller.join);
router.get('/login',controller.login);
router.get('/info',controller.info);

module.exports = router;