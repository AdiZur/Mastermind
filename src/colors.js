/**
 * The function gets an array of strings and prints them.
 * @param {[string]} colors 
 */
function printColors(colors) {
    colors.forEach((color, index) => {
        console.log(`${index + 1}: ${color}`);
    });
}

module.exports.printColors = printColors