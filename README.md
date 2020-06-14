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

generateCcNumber(1313, 16, true); // "1313 8291 8789 9580"
generateCcNumber(1313, 16); // "1313829187899580"

```

**generateCcNumber(prefix: string | number, length: string | number, [formatted:boolean = false]): string**

- _prefix_ - digits to be prepended to the final result;
- _length_ - length of the final result, including the prefix;
- _formatted_ - optional, defaults to false, should the result
  be formatted with a space after every 4th digit or not.

## Validate a credit card -like number

```
import { isValidCcNumber } from "optima-ccgen";

isValidCcNumber(1313829187899580); // true
```

**isValidCcNumber(value: string | number): boolean**

- _value_ - numeric sequence to be validated against Luhn algorythm.
  If a formatted number is passed as argument, empty spaces will be
  removed and then the result will be validated.

## Format string as credit card number

```
import { formatCcNumber } from 'optima-ccgen';

formatCcNumber("1234567898765432") // "1234 5678 9876 5432"
```

**formatCcNumber(value: string | number): string**

- _value_ - value to be formatted.
