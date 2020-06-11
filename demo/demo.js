const ccgen = require("../index.js");

var cc = new ccgen().generate(1313, 12);

console.log(cc);
console.log(new ccgen().isValid(cc));
