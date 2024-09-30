/***
 * This module provides functions to generate a random array of colors to guess,
 * and to convert user input from a string to an array of colors.
 *
 * Functions:
 * - getRandomOptions: Generates a random array of colors to guess.
 * - convertUserGuessToArray: Converts user input from a string to an array of colors.
 */

const { ALLOWED_OPTIONS, MAX_CHANCES, OPTIONS_TO_GUESS } = require("./consts");

/**
 * the function use array of string - ALLOWED_OPTIONS and
 * return random array of new options that the user need to guess.
 * @return {string[]} colorsToGuess
 */
module.exports.getRandomOptions = function () {
  return new Array(OPTIONS_TO_GUESS)
    .fill(0)
    .map(
      () => ALLOWED_OPTIONS[Math.floor(Math.random() * ALLOWED_OPTIONS.length)],
    );
};

/**
 * the function convert the user input from string to array og colors
 * @param {string} userInput
 * @return {string[]} colorsToGuess
 */
module.exports.convertUserGuessToArray = function (userInput) {
  const numbersInput = removeRedundantSpaces(userInput).split(" ");
  const validInput = validateUserGuess(numbersInput);

  return validInput ? mapUserInputToColors(numbersInput) : null;
};

/**
 * @param {string} userInput
 * @return {string} fixUserInput
 */
function removeRedundantSpaces(userInput) {
  return userInput.trim().replace(/\s+/g, " ");
}

/**
 * return true if the input is valid, else return false.
 * @param {string[]} numbersInput
 * @return {boolean} validInput
 */
function validateUserGuess(numbersInput) {
  return (
    numbersInput.length === OPTIONS_TO_GUESS &&
    numbersInput.every(
      (num) => !Number.isNaN(num) && 0 <= num && num < ALLOWED_OPTIONS.length,
    )
  );
}

/**
 * @param {string[]} userInput
 * @return {string[]} fixUserInputArray
 */
function mapUserInputToColors(userInput) {
  return userInput.map((num) => ALLOWED_OPTIONS[parseInt(num)]);
}
