const leapYears = function(year) {
    if (year < 0) return false;
    // A leap year is divisible by 4
    if (year % 4 == 0) {
        // But, if it is also divisible by 100...
        if (year % 100 == 0) {
            // Then it must also be divisible by 400 to be a leap year.
            if (year % 400 == 0) {
                return true;
            }
            else return false;
        }
        else return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
