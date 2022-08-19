const express = require('express');
const router = express.Router();

const userDataController = require('../controllers/userDataController');

router.get('/', userDataController.getUserData);

module.exports = router;