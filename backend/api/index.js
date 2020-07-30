const express = require('express');
const router = express.Router();
router.use(express.json());

//add additional routes here
router.use('/profile', require('./profile'));
router.use('/user', require('./user'))

module.exports = router