
const square = require("./app").square // anonymous function imported as module

let x,y // multiple declarations separated by comma

// Not all functions have parameters and return values
function GetArgumentsFromProcess() {
    const args = process.argv.slice(2) // process.argv holds arguemnts passed from the terminal as an array
    // console.log(args)
    x = Number(args[0])
    y = Number(args[1])
    
    if(isNaN(x) || isNaN(y)) { // check for missin 
        console.log("Invalid input. Applying default values (4x4)")
        x = 4
        y = 4
    } 
} 


GetArgumentsFromProcess()
console.log(`SUCCESS: ${x} X ${y} equals ${square(x,y)}!`) 