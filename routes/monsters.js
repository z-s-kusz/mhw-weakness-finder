const express = require('express');
const router = express.Router();
const path = require('path');
const Monster = require('../models/monsterSchema');

router.get('/test', (req, res) => {
    console.log('got a request to go to test', req.body);
    res.sendStatus(200);
});

module.exports = router;
