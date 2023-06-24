'use strict';

const Base = require('evado/component/base/BaseController');

module.exports = class CustomController extends Base {

    static getConstants () {
        return {
            METHODS: {
                'someRequest': 'post' // only POST requests is allowed
            }
        };
    }

    async actionSomeRequest () {
        const params = this.getPostParams();
        if (!params.data) {
            throw new BadRequest('No valid request data');
        }
        this.sendText('Ok');
    }
};
module.exports.init(module);

const BadRequest = require('areto/error/http/BadRequest');