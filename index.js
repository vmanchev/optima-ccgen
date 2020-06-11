/**
 * Generates a credit card number
 *
 * It is a number, implementing Luhn algoritm
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} prefix Number to prepend.
 * @param {number} length Required total length of
 * the generated number, including the preffix length.
 * @param {boolean} formatted Should the result number
 * be formatted with a space after every 4 characters or not.
 * @returns {string}
 */
function generateCcNumber(prefix, length, formatted = false) {
  prefix = prefix.toString();
  length = parseInt(length, 10);

  var number = prefix + getRandomNumber(length - prefix.length);

  var ccNumber = number.toString() + verificationDigit(number);

  return formatted ? formatCcNumber(ccNumber) : ccNumber;
}

function formatCcNumber(number) {
  return number.replace(/(.{4})/g, "$& ").trim();
}

/**
 * Is valid credit card number
 *
 * Whether or not a given number validates against Luhn algorithm
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param {number} number
 * @returns {boolean}
 */
function isValidCcNumber(number) {
  var lastDigit = number.slice(-1);
  var number = number.slice(0, -1);

  return verificationDigit(number) == lastDigit;
}

multiplyNumber = function (number) {
  var result = number * 2;

  return result > 9 ? result - 9 : result;
};

getRandomNumber = function (length) {
  var rand = [];

  for (let i = 1; i < length; i++) {
    rand.push(getRandomInt(0, 10));
  }

  return rand.join("");
};

getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

verificationDigit = function (number) {
  var mod = sum(number) % 10;

  return 10 - (mod ? mod : 10);
};

sum = function (number) {
  var numbers = number.split("").reverse();

  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    var digit = parseInt(numbers[i]);
    sum += i % 2 == 0 ? multiplyNumber(digit) : digit;
  }

  return sum;
};

exports.generateCcNumber = generateCcNumber;
exports.isValidCcNumber = isValidCcNumber;
