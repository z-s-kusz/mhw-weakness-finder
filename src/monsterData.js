const m1 = {
    id: 123,
    name: 'Pukei-Pukei',
    icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/d1/MH3U-Rathalos_Icon.png/revision/latest?cb=20170223014654',
    weak_statuses: {
        poison: 1,
        sleep: 3,
        paralysis: 3,
        blast: 2,
        stun: 2
    },
    weak_elements: {
        fire: 2,
        water: 0,
        thunder: 3,
        ice: 2,
        dragon: 1
    },
    monster_attacks: {
        poison: true
    }
};

const m2 = {
    id: 543,
    name: 'Kushala Daora',
    icon: null,
    weak_statuses: {
        poison: 3,
        sleep: 1,
        paralysis: 1,
        blast: 3,
        stun: 2
    },
    weak_elements: {
        fire: 1,
        water: 0,
        thunder: 3,
        ice: 0,
        dragon: 2
    },
    monster_attacks: {
        wind_pressure: true,
        dragon: true
    }
};

const m3 = {
    id: 90900,
    name: 'Legiana',
    icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/2b/MH3U-Rathian_Icon.png/revision/latest?cb=20170223014654',
    weak_statuses: {
        poison: 3,
        sleep: 2,
        paralysis: 2,
        blast: 2,
        stun: 2
    },
    weak_elements: {
        fire: 2,
        water: 1,
        thunder: 3,
        ice: 0,
        dragon: 1
    },
    monster_attacks: {
        ice: true
    }
};

const monsters = [m1,m2,m3];

export default monsters;
