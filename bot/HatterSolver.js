'use strict';

const Base = require('e-champ-durak/bot/StandardSolver');

module.exports = class HatterSolver extends Base {

    constructor (config) {
        super({
            passChance: .5,
            pickUpChance: .2,
            ...config
        });
    }

    getCardsToAttack (validCards) {
        if (this.table.length) {
            if (this.stock > 0) {
                if (Math.random() < this.passChance) {
                    return [];
                }
            }
        }
        const index = Math.floor(Math.random() * validCards.length);
        return validCards.slice(index, index + 1);
    }

    getCardToDefend (attacking, cards) {
        cards = this.getCardsToDefend(attacking, cards);
        if (!cards.length) {
            return null;
        }
        if (this.stock > 0) {
            if (Math.random() < this.pickUpChance) {
                return null;
            }
        }
        const index = Math.floor(Math.random() * cards.length);
        return cards[index];
    }
};