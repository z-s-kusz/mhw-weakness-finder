const express = require('express');
const router = express.Router();
const path = require('path');
const Monster = require('../models/monsterSchema');

// get/read all
router.get('/', (req, res) => {
    Monster.find({}, (err, monsters) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(monsters);
        }
    });
});

// create new
router.post('/', (req, res) => {
    console.log('req.body!', req.body);
    let monster = new Monster(req.body);
    monster.save(err => {
        if (err) {
            return res.send(err);
        } else {
            return res.sendStatus(200);
        }
    });
});

module.exports = router;
