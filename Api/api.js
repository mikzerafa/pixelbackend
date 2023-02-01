const chai = require('chai');
require('mocha');
const chaihttp = require('chai-http');

chai.use(chaihttp);

async function getProviders() {
    const providers = await chai.request('https://backend.pixel.bet')
        .get('/rest/casino/providers')
        .send()

    return JSON.stringify(providers.body);
}

export default {
    getProviders
}