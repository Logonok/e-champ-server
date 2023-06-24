'use strict';

module.exports = {

    title: 'E-Champ',

    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'e-champ',
            }
        },
        'i18n': {
            language: 'en'
        },
        'arena': {
            games: {
                'durak': require('./game/durak/default'),
                'draughts': require('./game/draughts/default')
            }
        }
    },
    modules: {
        'club': {
            Class: require('../module/club/Module')
        }
    },
    security: require('./default-security'),
    users: require('./default-users')
};