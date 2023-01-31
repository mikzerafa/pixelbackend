const chai = require('chai');
require('mocha');
const chaihttp = require('chai-http');
const je = require('json-evolve/types/jsonEvolve.js').default;

const keys = ["title", "key", "ordinal", "ageLimit"];
const myIt = it;
const myIt_Key = (json, key) => myIt("should have key: " + key + " which contains data", (json2 = json, key2 = key) => { testKey(json2, key2) })
const myIt_Providers_Key = async(key) => myIt("should have key: " + key + " which contains data", async() => {
    let providers = await getProviders();
    providers = CleanJson(providers);
    testKey(providers, key)
})

chai.use(chaihttp);

describe('Provider Test', async() => {
    keys.forEach(key => {
        myIt_Providers_Key(key);
    })
})


// const myIt = (title, param, func) => it(title, func(param));
// const myIt_2 = (title, param1, param2, func) => it(title, (param1, param2) => {
//     func(param1, param2);
// });
// const myIt_Key = (json, key) => myIt_2("", json, key, testKey);
// // je.print(providersJson);

async function getProviders() {
    const providers = await chai.request('https://backend.pixel.bet')
        .get('/rest/casino/providers')
        .send()

    return JSON.stringify(providers.body);
}

function CleanJson(json) {
    if (json[0] == "[") {
        return json.substring(1, json.length - 1);
    }
    return json;
}

function testKey(json, key) {
    process.stdout.write("\n\nkey '" + key + "' Exists...");
    je.assert.KeyExists(json, key);
    console.log('Pass');

    process.stdout.write("key '" + key + "' contains Data...");
    je.assert.KeyContainsData(json, key);
    console.log('Pass')
}