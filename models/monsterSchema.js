const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
    name: {type: String, required: true},
    icon: {type: String, required: false, default: ''},
    iconCredits: {type: String, required: false, default: ''},
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
    searchableParts: {type: String, defult: ''},
    droppedMaterialLow: {type: String, defult: ''},
    droppedMaterialHigh: {type: String, defult: ''},
    breakables: [{
        name: {type: String, required: true},
        severable: {type: Boolean, default: false},
        weakPoint: {type: Boolean, default: false},
        slicing: {type: Number, default: 0},
        blunt: {type: Number, default: 0},
        ranged: {type: Number, default: 0},
        lowRankDrops: [{
            name: {type: String},
            rare: {type: Boolean, default: false}
        }],
        highRankDrops: [{
            name: {type: String},
            rare: {type: Boolean, default: false}
        }]
    }]
});

const Monster = mongoose.model('Monster', MonsterSchema);

module.exports = Monster;
