# Credit card -like number generator

This package exposes two methods - **generateCcNumber** and **isValidCcNumber**.
It is based on Luhn_algorithm, used to generates and validates credit card numbers.
Of couse, one can use it for any other purpose such as client codes, gift card codes, etc.
Or in other words - when you don't need a sequential numbers, but rather a way to
verify the integrity of the provided numerical string.

## Installation

```
npm install optima-ccgen --save
```

## Generate a new credit card -like number

```
import { generateCcNumber } from "optima-ccgen";

generateCcNumber(1313, 16, true); // 1313 8291 8789 9580

```

**generateCcNumber(prefix, length, [formatted = false])**

- _prefix_ - digits to be prepended to the final result;
- _length_ - length of the final result, including the prefix;
- _formatted_ - optional, defaults to false, should the result
  be formatted with a space after every 4th digit or not.

## Validate a credit card -like number

```
import { isValidCcNumber } from "optima-ccgen";

isValidCcNumber('1313829187899580'); // true
```

**isValidCcNumber(number)**

- _number_ - numeric sequence to be validated against Luhn algorythm.
  If a formatted number is passed as argument, empty spaces will be
  removed and then the result will be validated.
