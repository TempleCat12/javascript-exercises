const convertToCelsius = function(temp) {
    let result = (temp - 32) * 5/9
    if(result.toString().includes(".")){
      result = +result.toFixed(1);
    }
    return result;
};

const convertToFahrenheit = function(temp) {
    let result = temp * (9/5) + 32;
    if(result.toString().includes(".")){
      result = +result.toFixed(1);
    }
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
