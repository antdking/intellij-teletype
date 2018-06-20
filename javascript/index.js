const {TeletypeClient} = require('@atom/teletype-client');
const constants = require('./constants');



const client = new TeletypeClient({
    pusherKey: constants.PUSHER_KEY,
    pusherOptions: {
        cluster: constants.PUSHER_CLUSTER,
        disableStats: true,
    },
    baseURL: constants.API_URL_BASE,
});
