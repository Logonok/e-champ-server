'use strict';

const Base = require('e-champ-draughts/play/Draughts');

module.exports = class CustomDraughts extends Base {

    endRound (loser, params) {

        super.endRound(...arguments);

        const winner = loser ? this.getNextHand(loser) : null;
        const draw1 = loser ? null : this.hands[0];
        const draw2 = loser ? null : this.hands[1];

        // add player IDs
        const eventData = this.events.getLast().data;
        eventData.winnerId = winner?.player.id;
        eventData.loserId = loser?.player.id;
        eventData.draw1Id = draw1?.player.id;
        eventData.draw2Id = draw2?.player.id;
    }
};