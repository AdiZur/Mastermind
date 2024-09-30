const { GAME_STATUS, COLORS_OPTIONS, MAX_CHANCES } = require('./consts');
const prompt = require('prompt-sync')();
const { getColorsToGuess, convertUserGuessToArray } = require('./colorMapper');
const { getGameStatus } = require('./game-status/game.status');

function gameLoop() {
  let answer = '';
  const previous = [];
  let count = 0;

  const lottery = getColorsToGuess();

  console.log(`Welcome! In front of you are six colors: ${COLORS_OPTIONS}}.
        of which I have chosen four colors,
        and you must find the colors I have chosen
        as well as their exact location in the smallest number of attempts 
        and no more than ten. Please enter numbers separated by a space. To stop the game click "ctrl + c".
        please try: `);

  // פונקציה שבודקת את התשובות
  let gameStatus = GAME_STATUS.RESUME;

  do {
    answer = prompt(
      `you have ${MAX_CHANCES - count} attempts left. please try again: `
    );

    const parse = convertUserGuessToArray(answer);

    const result = getGameStatus(count, parse, lottery);

    if (result) {
      const { data, status } = result;
      gameStatus = status;
      previous.push(parse);

      console.log(
        `Your previous attempts ${previous}. your choice now is: ${parse}. and you got ${JSON.stringify(data)}`
      );

      count++;
    } else {
      console.log('invalid input');
    }
  } while (![GAME_STATUS.LOSE, GAME_STATUS.WIN].includes(gameStatus));

  return gameStatus === GAME_STATUS.WIN
    ? console.log(`congratulations you won in ${count} attempts`)
    : console.log(
        `failed! sorry, you tried ${count} times out of ${MAX_CHANCES} attempts. The correct answer was: ${lottery}`
      );
}
console.log(gameLoop());
