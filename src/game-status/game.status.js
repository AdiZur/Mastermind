const { MAX_CHANCES, GAME_STATUS } = require("../consts");
const { loseStatus } = require("./lose.status");
const { winStatus } = require("./win.status");

/**
 * a function that gets chosen user color baord, guess color board, and number of options used.
 * returns game status and data if game is lost, won or resumes
 * @param {number} optionsUsed
 * @param {[string]} chosenUserBoard
 * @param {[string]} computerBoard
 * @returns {{ status:number, data: { hit:number, bullseye:number } }}
 */

module.exports.getGameStatus = (
  optionsUsed,
  chosenUserBoard,
  computerBoard
) => {
  const currentStatus = winStatus(chosenUserBoard, computerBoard);
  if (
    currentStatus.status === GAME_STATUS.RESUME &&
    loseStatus(optionsUsed, MAX_CHANCES)
  ) {
    currentStatus.status = GAME_STATUS.LOSE;
    return currentStatus;
  }
  return currentStatus;
};
