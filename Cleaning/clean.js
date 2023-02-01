function CleanJson(json) {
    if (json[0] == "[") {
        return json.substring(1, json.length - 1);
    }
    return json;
}

export default {
    CleanJson
}