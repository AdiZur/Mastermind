/**
 * a function that recieves options used and total options and returns boolean to check if they are equal
 * @param {number} optionsUsed
 * @param {number} totalOptions
 * @returns {boolean}
 */
module.exports.loseStatus = (optionsUsed, totalOptions) => {
  const reduceOptions = totalOptions - optionsUsed;
  return reduceOptions === 0;
};
