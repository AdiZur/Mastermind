const { GAME_STATUS } = require("../consts");

/**
 * a function that compares user board and guess board and return win or resume status
 * @param {[string]} chosenUserBoard
 * @param {[string]} computerBoard
 * @returns {{ status:number, data:null | { hit:number, bullseye:number } }}
 */
module.exports.winStatus = (_userOptions, _computerOption) => {
  // reduce function that checks computer board color in current index and returns data object
  let hit = 0;
  let bullseye = 0;

  const userOptions = _userOptions.slice(0);
  const computerOption = _computerOption.slice(0);

  // Check for bullseye and remove if exists
  let i = userOptions.length;
  while (i--) {
    const userItem = userOptions[i];
    const computerItem = computerOption[i];

    if (userItem === computerItem) {
      userOptions.splice(i, 1);
      computerOption.splice(i, 1);
      bullseye++;
    }
  }

  // Check for hits and remove if exists
  i = userOptions.length;
  while (i--) {
    const userItem = userOptions[i];
    const isExistsIndex = computerOption.indexOf(userItem);

    if (isExistsIndex >= 0) {
      computerOption.splice(isExistsIndex, 1);
      hit++;
    }
  }

  const data = { hit, bullseye };

  return bullseye === _computerOption.length
    ? { status: GAME_STATUS.WIN, data }
    : { status: GAME_STATUS.RESUME, data };
};
