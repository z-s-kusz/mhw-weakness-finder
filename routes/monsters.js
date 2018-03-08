const express = require('express');
const router = express.Router();
const path = require('path');
const Monster = require('../models/monsterSchema');

// get/read all
router.get('/', (req, res) => {
    Monster.find({}, (err, monsters) => {
        if (err) {
            console.log('get all err', err);
            return res.sendStatus(500);
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
            console.log('get 1 err', err);
            return res.sendStatus(500);
        } else {
            return res.json(monster);
        }
    });
});

// create new
router.post('/', (req, res) => {
    let monster = new Monster( makePartsSearchable(req.body) );
    monster.save(err => {
        if (err) {
            console.log('create err', err);
            return res.sendStatus(500);
        } else {
            return res.sendStatus(200);
        }
    });
});

// update one by _id
router.post('/:_id', (req, res) => {
    let monster = makePartsSearchable(req.body);
    Monster.findByIdAndUpdate(req.params._id, monster, (err, monster) => {
        if (err) {
            console.log('update err', err);
            return res.sendStatus(500);
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
            console.log('delete err', err);
            return res.sendStatus(500);
        } else {
            return res.sendStatus(200);
        }
    });
});


// makes the 2 arrays of monster parts objects more eaily searchable for frontend
makePartsSearchable = function(monster) {
    let searchableParts = '';
    if (monster.lowRankParts.length > 0) {
        monster.lowRankParts.forEach(reward => {
            searchableParts += reward.name + ',';
        });
    }
    if (monster.highRankParts.length > 0) {
        monster.highRankParts.forEach(reward => {
            searchableParts += reward.name + ',';
        });
    }
    monster.searchableParts = searchableParts;
    return monster;
}

module.exports = router;
