/**
 * the function gets an input to check if it is a string and returns boolean
 * @param {string} str
 * @returns {boolean}
 */
module.exports.isString = (str) => typeof str === "string";

/**
 * the function gets an input and checks if it is a type of an array and returns boolean
 * @param {[]} arr
 * @returns {boolean}
 */
module.exports.isArray = (arr) => Array.isArray(arr);

/**
 * the function gets an input and check if it is an array of strings and returns boolean
 * @param {[string]} arr
 * @returns {boolean}
 */
module.exports.isArrayOfStrings = (arr) => {
  if (!this.isArray(arr)) return false;
  return arr.every((val) => this.isString(val));
};

/**
 * the function gets an input and checks if it is a type of a number and returns boolean
 * @param {number} num
 * @returns {boolean}
 */
module.exports.isNumber = (num) => typeof num === "number";
