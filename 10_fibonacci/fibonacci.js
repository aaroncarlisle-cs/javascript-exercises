const fibonacci = function(index) {
let a = 0;
let b = 1;
let c;
if (index < 1) return "OOPS";
if (index == 1) return a + b;
for (let i = 1; i < index; i++) {
    c = a + b;
    a = b;
    b = c;
}
return c;
}
// Do not edit below this line
module.exports = fibonacci;
