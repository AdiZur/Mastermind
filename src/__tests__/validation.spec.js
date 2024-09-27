const {
  isString,
  isArray,
  isArrayOfStrings,
  isNumber,
  patternValidation,
} = require("../utils/validation.utils");

describe("testing validation functions", () => {
  test.each([
    ["hello", true],
    ["strig", true],
    [{}, false],
    [1, false],
    ["4324", true],
  ])(`test isString(%s) function to be %s`, (input, bool) => {
    expect(isString(input)).toBe(bool);
  });
  test.each([
    [["hello"], true],
    ["strig", false],
    [[{}], true],
    [{}, false],
    ["[]", false],
  ])(`test isArray(%s) function to return %s`, (input, bool) => {
    expect(isArray(input)).toBe(bool);
  });

  test.each([
    [["hello", "weff"], true],
    ["strig", false],
    [[{}, "arr"], false],
    [{}, false],
    ["[]", false],
  ])(`test isArrayOfStrings(%s) function to return %s`, (input, bool) => {
    expect(isArrayOfStrings(input)).toBe(bool);
  });

  test.each([
    [["hello", "weff"], false],
    ["436", false],
    [[{}, "arr"], false],
    [5765, true],
    ["[]", false],
  ])(`test isNumber(%s) function to return %s`, (input, bool) => {
    expect(isNumber(input)).toBe(bool);
  });

  test.each([
    [
      [
        ["hello", "weff"],
        ["john", "cena"],
      ],
      isArrayOfStrings,
      true,
    ],
    [[436, 8934], isNumber, true],
    [[[]], isArray, true],
    [["red", "green", "blue"], isString, true],
    [
      [
        ["hello", "weff"],
        ["john", false],
      ],
      isArrayOfStrings,
      false,
    ],
    [[436, "8934"], isNumber, false],
    [[435], isArray, false],
    [[{}, false], isString, false],
  ])(`test patternValidation(%s,%s) return %s`, (input, func, bool) => {
    expect(patternValidation(input, func)).toBe(bool);
  });
});
