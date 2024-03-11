const express = require('express');

const router = express.Router();

const pageController = require('../controllers/page')

router.get('/', pageController.getloginpage)

module.exports = router;