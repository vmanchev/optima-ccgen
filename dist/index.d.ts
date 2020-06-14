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
export declare function generateCcNumber(prefix: string, length: number, formatted?: boolean): string;
/**
 * Inserts an empty space after every 4th element
 *
 * @param {string} value
 * @returns {string}
 */
export declare function formatCcNumber(value: string): string;
/**
 * Is valid credit card number
 *
 * Whether or not a given number validates against Luhn algorithm
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param {string} value
 * @returns {boolean}
 */
export declare function isValidCcNumber(value: string): boolean;
