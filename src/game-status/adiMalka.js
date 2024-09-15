const optionToGuess = 4;

/**
 * thr function get array of strung - colors and return random array of new options
 * @param {[string]} colorOptions
 * @return {[string]} colorsToGuess
 */
function getColorsToGuess(colorOptions){
    return new Array(optionToGuess).fill(0)
        .map(() => colorOptions[Math.floor(Math.random()*colorOptions.length)]);
}

/**
 * thr function get array of strung - colors and return random array of new options
 * @param {string} userInput
 * @param {[string]} colorOptions
 * @return {[string]} colorsToGuess
 */
function convertUserGuessToArray(userInput,colorOptions ){
    const numbersInput = userInput.trim().replace(/\s+/g, ' ').split(' ');

    if(numbersInput.length !== optionToGuess ||
        numbersInput.every(num => !isNaN(num) && !(0 <= num && num < colorOptions.length))){
        return null;
    }

    return numbersInput.map(num=> colorOptions[parseInt(num)]);
}