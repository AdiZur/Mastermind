const { OPTIONS } = require('../src/consts')

function printColors(colors) {
    colors.forEach((color, index) => {
        console.log(`${index + 1}: ${color}`);
    });
}

printColors(OPTIONS)