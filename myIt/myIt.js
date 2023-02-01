const myIt = it;
const myIt_Key = (json, key) => myIt("should have key: " + key + " which contains data", (json2 = json, key2 = key) => { testKey(json2, key2) })


export default {
    myIt_Key
}