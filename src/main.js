require("draftlog").into(console).addLineListener(process.stdin);
const { GAME_STATUS, ALLOWED_OPTIONS, MAX_CHANCES } = require("./consts");
const prompt = require("prompt-sync")();
const { getRandomOptions, convertUserGuessToArray } = require("./colorMapper");
const { getGameStatus } = require("./game-status/game.status");
const { getBoardOutput } = require("./utils/outputs");

// todo: test for output - remove from production
function* getUserOption() {
  while (true) {
    yield getRandomOptions();
  }
}

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function gameLoop() {
  const lottery = getRandomOptions();
  const previous = [];
  let count = 0;

  let gameStatus = GAME_STATUS.RESUME;

  // console.log(`Welcome! In front of you are six colors: ${ALLOWED_OPTIONS}}.
  //       of which I have chosen four colors,
  //       and you must find the colors I have chosen
  //       as well as their exact location in the smallest number of attempts
  //       and no more than ten. Please enter numbers separated by a space. To stop the game click "ctrl + c".
  //       please try: `);

  const gen = getUserOption();
  const printBoard = console.draft();

  do {
    const output = getBoardOutput(previous, MAX_CHANCES);
    printBoard(output);

    // todo: uncomment for production ready
    const promptStr = `#${String(count + 1).padStart(2, "0")} guess: `;
    const input = prompt(promptStr);
    process.stdout.write("\x1B[1A"); // Move the cursor up by one line
    process.stdout.write("\x1B[K"); // Clear the line
    const answer = convertUserGuessToArray(input);

    // todo: test for output - remove from production
    // const answer = gen.next().value;

    const result = getGameStatus(count, answer, lottery);
    if (!result) {
      console.log("invalid input");
      await sleep(750);
      process.stdout.write("\x1B[1A"); // Move the cursor up by one line
      process.stdout.write("\x1B[K"); // Clear the line
      continue;
    }

    const { data: score, status } = result;
    gameStatus = status;
    previous.push({ guess: answer, score });

    count++;
  } while (![GAME_STATUS.LOSE, GAME_STATUS.WIN].includes(gameStatus));

  gameStatus === GAME_STATUS.WIN
    ? console.log(`congratulations you won in ${count} attempts`)
    : console.log(
        `failed! sorry, you tried ${count} times out of ${MAX_CHANCES} attempts. The correct answer was: ${lottery}`,
      );
}

gameLoop();

// (async () => {
//   await gameLoop();
// })();
