'use strict';

exports.BattlePokedex = {
    tropius: {
        inherit: true,
        baseStats: {hp: 110, atk: 70, def: 85, spa: 100, spd: 90, spe: 75}
    },
    avalugg: {
        inherit: true,
        baseStats: {hp: 100, atk: 125, def: 155, spa: 30, spd: 95, spe: 30}
    },
    delibird: {
        inherit: true,
        baseStats: {hp: 75, atk: 90, def: 75, spa: 70, spd: 60, spe: 100},
        abilities: {0: 'Vital Spirit', 1: 'Hustle', H: 'Fur Coat'}
    },
    golduck: {
        inherit: true,
        baseStats: {hp: 100, atk: 80, def: 80, spa: 125, spd: 125, spe: 85},
        types: ['Water', 'Psychic'],
        abilities: {0: 'Trace', 1: 'Cloud Nine', H: 'Swift Swim'}
    },
    gyarados: {
        inherit: true,
        types: ['Water', 'Dragon'],
        abilities: {0: 'Intimidate', 1: 'Hustle', H: 'Moxie'}
    },
    gyaradosmega: {
        inherit: true,
        types: ['Water', 'Dragon'],
        abilities: {0: 'Hustle'}
    },
    torterra: {
        inherit: true,
        baseStats: {hp: 130, atk: 110, def: 120, spa: 60, spd: 100, spe: 25},
        abilities: {0: 'Overgrow', 1: 'Thick Fat', H: 'Shell Armor'}
    },
    flygon: {
        inherit: true,
        baseStats: {hp: 75, atk: 115, def: 80, spa: 60, spd: 80, spe: 110},
        abilities: {0: 'Levitate', 1: 'Tinted Lens'},
        types: ['Dragon', 'Bug']

    }
};
