const repeatString = function(str, num) {
    const resource = str;
    for(let i = 1; i < num; i++){
        str += resource;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
