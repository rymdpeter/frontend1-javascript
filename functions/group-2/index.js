
const square = require("./app.js").square // anonymous function imported from a module

let x,y // multiple variable declarations separated by comma

// Not all functions have parameters and return values
// we can still access variables and functions in the outer scope
function GetArgumentsFromProcess() {
    console.log(process.argv)
    const args = process.argv.slice(2) // process.argv holds arguemnts passed from the terminal as an array
    console.log(args)
    x = Number(args[0])
    y = Number(args[1])
    
    if(isNaN(x) || isNaN(y)) { // check for missing or invalid input
        console.log("Invalid input. Applying default values (4x4)")
        x = 4
        y = 4
    } 
} 


GetArgumentsFromProcess()
console.log(`SUCCESS: ${x} X ${y} equals ${square(x,y)}!`) 