'use strict';

const Base = require('e-champ-draughts/play/Draughts');

module.exports = class CustomDraughts extends Base {

    endRound (loser, params) {

        super.endRound(...arguments);

        const winner = loser ? this.getNextHand(loser) : null;
        const draw1 = loser ? null : this.hands[0];
        const draw2 = loser ? null : this.hands[1];

        // your code hear
    }
};