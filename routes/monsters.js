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

// get/read one
router.get('/:_id', (req, res) => {
    const query = {
        '_id': req.params._id
    };
    Monster.find(query, (err, monster) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(monster);
        }
    });
});

// create new
router.post('/', (req, res) => {
    let monster = new Monster(req.body);
    monster.save(err => {
        if (err) {
            return res.send(err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// update one by _id
router.post('/:_id', (req, res) => {
    Monster.findByIdAndUpdate(req.params._id, req.body, (err, monster) => {
        if (err) {
            return res.send(err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// delete one by _id
router.delete('/:_id', (req, res) => {
    const query = {
        '_id': req.params._id
    };
    Monster.remove(query, (err, monster) => {
        if (err) {
            return res.send(err);
        } else {
            return res.sendStatus(200);
        }
    });
});


module.exports = router;
