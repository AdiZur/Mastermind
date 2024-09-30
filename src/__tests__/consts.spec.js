const { ALLOWED_OPTIONS, MAX_CHANCES, OPTIONS_TO_GUESS } = require("../consts");

test("should have correct color options", () => {
  expect(ALLOWED_OPTIONS).toEqual([
    "Red",
    "Yellow",
    "Blue",
    "Green",
    "Black",
    "White",
  ]);
});

test("should have correct max chances", () => {
  expect(MAX_CHANCES).toBe(10);
});

test("should have correct options to guess", () => {
  expect(OPTIONS_TO_GUESS).toBe(4);
});
