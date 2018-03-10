const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
    name: {type: String, required: true},
    icon: {type: String, required: false, default: ''},
    poison: {type: Number, required: true},
    sleep: {type: Number, required: true},
    paralysis: {type: Number, required: true},
    blast: {type: Number, required: true},
    stun: {type: Number, required: true},
    fire: {type: Number, required: true},
    water: {type: Number, required: true},
    thunder: {type: Number, required: true},
    ice: {type: Number, required: true},
    dragon: {type: Number, required: true},
    lowRankParts: [{
        name: {type: String, required: false},
        carveRarity: {type: Number, required: false, default: 0},
        rewardRarity: {type: Number, required: false, default: 0}
    }],
    highRankParts: [{
        name: {type: String, required: false},
        carveRarity: {type: Number, required: false, default: 0},
        rewardRarity: {type: Number, required: false, default: 0}
    }],
    searchableParts: {type: String, defult: ''}
});

const Monster = mongoose.model('Monster', MonsterSchema);

module.exports = Monster;
