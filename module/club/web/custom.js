'use strict';

Club.PlayPage = class extends Club.PlayPage {

    startPlay () {
        super.startPlay(...arguments);

        const play = this.getPlay();
        const name = play?.game.name;
        if (name === 'draughts') {
            this.customDraughtsPlay();
        }
    }

    customDraughtsPlay () {
        if (Club.CustomDraughtsEndEvent) {
            return;
        }
        Club.CustomDraughtsEndEvent = class CustomDraughtsEndEvent extends Club.DraughtsEndEvent {

            finish () {
                super.finish();

                // get player IDs
                const {winnerId, loserId} = this.data;

                //this.sendWebSocketMessage();
                //this.sendPostMessage();
            }

            sendWebSocketMessage () {
                this.play.send('custom', {});
            }

            sendPostMessage () {
                const fetch = new Jam.Fetch;
                const {data} = this;
                return fetch.getText('/custom/some-request', {data})
                    .then(result => {
                        console.log('Request is done', result);
                    })
                    .catch(() => {
                        console.error('Request is failed');
                    });
            }
        };
        Club.DraughtsEndEvent = Club.CustomDraughtsEndEvent;
    }
};