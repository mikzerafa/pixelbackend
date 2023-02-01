const chai = require('chai');
require('mocha');
const chaihttp = require('chai-http');
import myIt from '../myIt/myIt';
const keys = ["title", "key", "ordinal", "ageLimit"];


chai.use(chaihttp);

describe('Provider Test', async() => {
    keys.forEach(key => {
        myIt.myIt_Providers_Key(key);
    })
})