const { GAME_STATUS } = require("../consts");

/**
 * a function that compares user board and guess board and return win or resume status
 * @param {[string]} chosenUserBoard
 * @param {[string]} computerBoard
 * @returns {{ status:number, data:null | { hit:number, bullseye:number } }}
 */
module.exports.winStatus = (chosenUserBoard, computerBoard) => {
  //reduce function that checks computer board color in current index and returns data object
  const compareBoardsColorsData = computerBoard.reduce(
    (obj, color, index) => {
      let addBullsEye = chosenUserBoard[index] == color ? 1 : 0;
      // trinary quiestion:
      // if there was a bullseye between guess board and user board in current index - hit is not added
      // if not, check if color exists in the user board
      let addHit =
        addBullsEye !== 0 ? 0 : chosenUserBoard.includes(color) ? 1 : 0;
      obj.hit += obj.hit + addHit;
      obj.bullseye = obj.bullseye + addBullsEye;
      return obj;
    },
    {
      hit: 0,
      bullseye: 0,
    }
  );

  if (compareBoardsColorsData.bullseye === computerBoard.length)
    return {
      status: GAME_STATUS.WIN,
      data: compareBoardsColorsData,
    };
  return {
    status: GAME_STATUS.RESUME,
    data: compareBoardsColorsData,
  };
};
