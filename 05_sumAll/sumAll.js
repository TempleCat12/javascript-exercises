const sumAll = function(num1, num2) {
    //illegal values
    if(num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    }
    //if num1 > num2, swap
    if(num1 > num2){
        let tempt = num1;
        num1 = num2;
        num2 = tempt;
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;