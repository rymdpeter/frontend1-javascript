// TODO add new function as an operator so that the user can type "calculate 2 + 4" from the frontend and get the correct answer
const square = function(x,y) {
    return calculateSquare(x,y)
    // return x * y
}

function calculateSquare(x,y) {
    return x * y // The return value can be assigned
}

// anonymous functions can be passed as arguments and used in other modules
exports.square = square