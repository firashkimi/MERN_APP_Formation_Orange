const express = require('express');
const { signup, login } = require('../controllers/userControllers');

const User = require('../models/userModal')

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

module.exports = router;

