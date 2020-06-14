/**
 * Generates a credit card number
 *
 * It is a number, implementing Luhn algoritm
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {string} prefix Number to prepend.
 * @param {number} length Required total length of
 * the generated number, including the preffix length.
 * @param {boolean} formatted Should the result number
 * be formatted with a space after every 4 characters or not.
 * @returns {string}
 */
export function generateCcNumber(
  prefix: string,
  length: number,
  formatted: boolean = false
): string {
  const number = prefix + getRandomNumber(length - prefix.length);

  let ccNumber = number + verificationDigit(number);

  return formatted ? formatCcNumber(ccNumber) : ccNumber;
}

/**
 * Inserts an empty space after every 4th element
 *
 * @param {string} value
 * @returns {string}
 */
export function formatCcNumber(value: string): string {
  return value.replace(/(.{4})/g, "$& ").trim();
}

/**
 * Is valid credit card number
 *
 * Whether or not a given number validates against Luhn algorithm
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param {string} value
 * @returns {boolean}
 */
export function isValidCcNumber(value: string): boolean {
  value = value.replace(/\D+/g, "");

  var lastDigit = parseInt(value.slice(-1), 10);
  value = value.slice(0, -1);

  return verificationDigit(value) == lastDigit;
}

function multiplyNumber(value: number): number {
  var result = value * 2;

  return result > 9 ? result - 9 : result;
}

function getRandomNumber(length: number): string {
  var rand = [];

  for (let i = 1; i < length; i++) {
    rand.push(getRandomInt(0, 10));
  }

  return rand.join("");
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function verificationDigit(number: string): number {
  var mod = sum(number) % 10;

  return 10 - (mod ? mod : 10);
}

function sum(number: string): number {
  var numbers = number.split("").reverse();

  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    var digit = parseInt(numbers[i]);
    sum += i % 2 == 0 ? multiplyNumber(digit) : digit;
  }

  return sum;
}
