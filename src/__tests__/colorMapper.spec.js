const {getColorsToGuess, convertUserGuessToArray} = require('../colorMapper');
const {COLORS_OPTIONS: colorOptions, MAX_CHANCES, OPTIONS_TO_GUESS} = require('../consts');


describe('Color Mapper', () => {

    test('getColorsToGuess', () => {
        const colorsToGuess = getColorsToGuess();

        expect(colorsToGuess.length).toBe(OPTIONS_TO_GUESS);

        const allColorsInRange = colorsToGuess
            .every(color => colorOptions.includes(color));

        expect(allColorsInRange).toBeTruthy();
    });

    test.each([
        ['1 4 3 2', [colorOptions[1], colorOptions[4], colorOptions[3], colorOptions[2]]],
        ['1   0   3 0   ', [colorOptions[1], colorOptions[0], colorOptions[3], colorOptions[0]]],
        ['   1  1  1 1  ', [colorOptions[1], colorOptions[1], colorOptions[1], colorOptions[1]]],
        ['5  4  5  4  ', [colorOptions[5], colorOptions[4], colorOptions[5], colorOptions[4]]]
    ])('convertUserGuessToArray - valid inputs - %s = %s', (userInput, expectedInput) => {
        const result = convertUserGuessToArray(userInput);
        expect(result).toEqual(expectedInput);
    });

    test.each([
        ['1234'],
        ['1 23 4'],
        ['10 23 4 32'],
        ['1 1 23 4'],
        ['  1 2 3 4 6'],
    ])('convertUserGuessToArray - invalid inputs %s = null', (userInput) => {
        const result = convertUserGuessToArray(userInput);
        expect(result).toBeNull();
    });
})