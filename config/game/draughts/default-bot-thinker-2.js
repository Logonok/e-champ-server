'use strict';

const defaults = require('e-champ-draughts-thinker/config/default');

module.exports = {

    ...defaults,

    label: 'Thinker Level 2',
    params: {
        ...defaults.params,

        depth: [3, 4]
    },
    translations: {
        'ru': {
            label: 'Мыслитель Уровень 2'
        }
    }
};