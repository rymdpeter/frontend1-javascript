
const square = require("./app").square // anonymous function imported as module

let x,y // process.argv holds arguments passed from the terminal

// Not all functions have parameters and return values
function GetArgumentsFromProcess() {
    // console.log(process.argv)
    if(process.argv.length >= 3) {
        x = parseInt(process.argv[2])
        y = parseInt(process.argv[3])
    } else {
        x = 4
        y = 4
    }
    
} 


GetArgumentsFromProcess()
console.log(!isNaN(x) && !isNaN(y) ? `SUCCESS: ${x} X ${y} equals ${square(x,y)}!` : "ERROR: Bad input") 