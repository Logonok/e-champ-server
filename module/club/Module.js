'use strict';

const Base = require('e-champ/module/club/Module');

module.exports = class ClubModule extends Base {

    constructor (config) {
        super({
            original: Base,
            ...config
        });
    }
};
module.exports.init(module);