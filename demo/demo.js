import generateCcNumber from "./index";
import isValidCcNumber from "./index";

var ccnum = generateCcNumber(1313, 16, true);

console.log(ccnum);
console.log(isValidCcNumber(ccnum));
