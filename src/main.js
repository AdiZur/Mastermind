const consts = require ('./consts');
const prompt = require('prompt-sync')({ sigint: true });

function gameLoop() {
    // const lottery = 'פונקציה שמבצעת הגרלה על הצבעים'
  
    let answer = prompt(`Welcome! In front of you are six colors: ${consts.OPTIONS}.
        of which I have chosen four colors,
        and you must find the colors I have chosen
        as well as their exact location in the smallest number of attempts 
        and no more than ten. please try: `);

    // פונקציה שבודקת את התשובות

    let count = 1
    while (answer !== lottery && count <= consts.MAX_CHANCES){
        console.log(`you selected: ${answer}. and you got ${/*פונקציה שמחזירה בול או פגיעה*/}`);
        
        answer = prompt(`you have ${consts.MAX_CHANCES - count} attempts left. please try again: `)
        count++
    }
    if (answer === lottery){
        return console.log(`congratulations you won in ${count} attempts`)
        }
    return console.log (`failed! sorry, you tried ${count} times out of ${consts.MAX_CHANCES} attempts. The correct answer was: ${lottery}`)
}
console.log(gameLoop());
