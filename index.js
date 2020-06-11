class ccgen {
  generate = function (prefix, length) {
    prefix = prefix.toString();
    length = parseInt(length, 10);

    var number = prefix + this.getRandomNumber(length - prefix.length);

    return number.toString() + this.verificationDigit(number);
  };

  /**
   * Multiplies number by two and decrease 9 if the number is greater than 10
   *
   * @param $number number
   * @returns number
   */
  multiplyNumber = function (number) {
    var result = number * 2;

    return result > 9 ? result - 9 : result;
  };

  getRandomNumber = function (length) {
    var rand = [];

    for (let i = 1; i < length; i++) {
      rand.push(this.getRandomInt(0, 10));
    }

    return rand.join("");
  };

  getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  verificationDigit = function (number) {
    var mod = this.sum(number) % 10;

    return 10 - (mod ? mod : 10);
  };

  sum = function (number) {
    var numbers = number.split("").reverse();

    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
      var digit = parseInt(numbers[i]);
      sum += i % 2 == 0 ? this.multiplyNumber(digit) : digit;
    }

    return sum;
  };

  isValid = function (number) {
    var lastDigit = number.slice(-1);
    var number = number.slice(0, -1);

    return this.verificationDigit(number) == lastDigit;
  };
}

module.exports = ccgen;
