const je = require('json-evolve/types/jsonEvolve.js').default;

function testKey(json, key) {
    process.stdout.write("\n\nkey '" + key + "' Exists...");
    je.assert.KeyExists(json, key);
    console.log('Pass');

    process.stdout.write("key '" + key + "' contains Data...");
    je.assert.KeyContainsData(json, key);
    console.log('Pass')
}

export default {
    testKey
}