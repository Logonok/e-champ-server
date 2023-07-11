'use strict';

const Base = require('e-champ-draughts/model/Options');

module.exports = class Options extends Base {

    static getConstants () {
        return {
            ATTRS: [{
                name: 'losing',
                label: 'Losing draughts',
                view: 'checkbox',
                format: 'boolean'
            }, {
                name: 'backCapture',
                label: 'Uncrowned piece can jump backwards',
                view: 'checkbox',
                format: 'boolean'
            }, {
                name: 'optionalCapture',
                label: 'Optional capture',
                view: 'checkbox',
                format: 'boolean'
            }, {
                name: 'darkFirst',
                label: 'Dark turn first',
                view: 'checkbox',
                format: 'boolean'
            }, {
                name: 'initialPosition',
                label: 'Initial position',
                hint: 'Lc1, Le1+, Df8, Dd8+',
                view: 'string'
            }],
            RULES: [
                [['losing', 'backCapture', 'optionalCapture', 'darkFirst'],  'checkbox']
            ]
        };
    }
};
module.exports.init(module);
