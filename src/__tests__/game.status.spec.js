const { GAME_STATUS } = require("../consts");
const { getGameStatus } = require("../game-status/game.status");

describe("testing game status function", () => {
  test.each([
    [
      5,
      ["RED", "GREEN", "GREEN", "BLACK"],
      ["RED", "GREEN", "RED", "BLUE"],
      { status: GAME_STATUS.RESUME, data: { hit: 1, bullseye: 2 } },
    ],
    [
      10,
      ["RED", "GREEN", "GREEN", "BLUE"],
      ["RED", "GREEN", "RED", "BLUE"],
      { status: GAME_STATUS.LOSE, data: { hit: 1, bullseye: 3 } },
    ],
    ,
    [
      10,
      ["RED", "GREEN", "RED", "BLUE"],
      ["RED", "GREEN", "RED", "BLUE"],
      { status: GAME_STATUS.WIN, data: { hit: 0, bullseye: 4 } },
    ],
    ,
  ])(
    `test getGameStatus(%s,%s,%s) function return data %s `,
    (chances, userBoard, computerBoard, expectedResult) => {
      const result = getGameStatus(chances, userBoard, computerBoard);
      expect(result).toEqual(expectedResult);
    }
  );
});
