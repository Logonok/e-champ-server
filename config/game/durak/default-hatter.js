'use strict';

module.exports = {

    label: 'Hatter',
    solver: {
        Class: require('../../../bot/Hatter'),
        passChance: .5,
        pickUpChance: .2
    },
    translations: {
        'ru': {
            label: 'Шляпник'
        }
    }
};