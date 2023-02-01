import myIt from './myIt'
import api from '../api'
import clean from '../Cleaning/clean'
import assert from '../Assertions/Assert.key'

const myIt_Providers_Key = async(key) => myIt.myIt("should have key: " + key + " which contains data", async() => {
    let providers = await api.getProviders();
    providers = clean.CleanJson(providers);
    assert.testKey(providers, key)
})

export default {
    myIt_Providers_Key
}