const reverseString = function(str) {
    const arr_char = str.split("");
    let result = "";
    for (let i = arr_char.length-1; i >= 0; i--) {
        result += arr_char[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
