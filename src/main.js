const consts = require('./consts');
const prompt = require('prompt-sync')();

function gameLoop() {
  let answer = '';
  const previous = [];
  let count = 0;

  const lottery =
    /* 'פונקציה שמבצעת הגרלה על הצבעים'*/

    console.log(`Welcome! In front of you are six colors: ${consts.OPTIONS}.
        of which I have chosen four colors,
        and you must find the colors I have chosen
        as well as their exact location in the smallest number of attempts 
        and no more than ten. Please enter numbers separated by a space. To stop the game click "ctrl + c".
        please try: `);

  // פונקציה שבודקת את התשובות

  while (answer !== lottery && count <= consts.MAX_CHANCES) {
    count++;

    const pars = 'פונקציה שמפרסרת את קלט המשתמש';

    const result = 'פונקציה שבודקת את התשובה של המשתמש';

    previous.push(pars);

    console.log(
      `Your previous attempts ${previous}. your choice now is: ${pars}. and you got ${result}`
    );

    answer = prompt(
      `you have ${consts.MAX_CHANCES - count} attempts left. please try again: `
    );
  }
  if (answer === lottery) {
    return console.log(`congratulations you won in ${count} attempts`);
  }
  return console.log(
    `failed! sorry, you tried ${count} times out of ${consts.MAX_CHANCES} attempts. The correct answer was: ${lottery}`
  );
}
console.log(gameLoop());
