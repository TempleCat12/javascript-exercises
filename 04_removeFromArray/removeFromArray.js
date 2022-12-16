const removeFromArray = function() {
    const arr = arguments[0];
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if(arr[i] === arguments[j]){
                index.push(i);
                break;
            }
        }
    }
    index.sort((a, b) => b - a);
    //remove elements from arr by index arr(descended)
    for (let i = 0; i < index.length; i++) {
        arr.splice(index[i], 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
