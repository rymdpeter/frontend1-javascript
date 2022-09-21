// Functions can also be held as the value of a variable
// They are called anonymous functions
const square = function(x,y) {
    return calculateSquare(x,y)
    // return x * y
}

function calculateSquare(x,y) {
    return x * y // The return value can be assigned
}

// anonymous functions can be passed as arguments and used in other modules
exports.square = square