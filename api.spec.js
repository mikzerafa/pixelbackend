import chai from 'chai';
import 'mocha';
import chaihttp from 'chai-http';

chai.use(chaihttp);

describe('Generic test', () => {
    it('Should return json from api endpoint', async() => {
        const providers = await chai.request('https://backend.pixel.bet/rest/casino/providers')
            .send()

    })
})