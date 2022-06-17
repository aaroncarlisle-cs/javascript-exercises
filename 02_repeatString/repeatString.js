const repeatString = function(string, iterations) {
    let newString = "";
    if (iterations < 0) {
        return "ERROR";
    }
    for (let i = 0; i < iterations; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
