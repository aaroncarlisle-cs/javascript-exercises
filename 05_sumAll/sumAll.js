const sumAll = function(num1, num2) {
    if (typeof num1 === typeof num2) {
        if (num1 >= 0 && num2 >= 0) {
            // Formula for sum of all natural numbers inclusive
            // ((a + b)*(b - a + 1)) / 2 
            if (num1 < num2) {
                return ((num1 + num2) * (num2 - num1 + 1)) / 2;     
            }
            else if (num1 > num2) {
                return ((num2 + num1) * (num1 - num2 + 1)) / 2;
            }
            else {
                return num1 + num2;
            }
        }
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
