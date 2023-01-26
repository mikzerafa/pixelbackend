const chai = require('chai');
require('mocha');
const chaihttp = require('chai-http');
const je = require('json-evolve/types/jsonEvolve.js').default;

chai.use(chaihttp);

describe('Generic test', () => {
    it('Should return json from api endpoint', async() => {
        const providers = await chai.request('https://backend.pixel.bet')
            .get('/rest/casino/providers')
            .send()

        //je.assert.KeyExists(providers.body, "title");
        je.assert.KeyContainsData(providers.body, "title");

    })
})