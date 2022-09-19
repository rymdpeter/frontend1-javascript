Functions can be declared by the reserved word function with parameters

function CalculateSquare(x,y) {
    return x * y
}

And called by using the name and () with arguments

let s = CalculateSquare(4,4)

Functions can also be held as the value of a variable

const square = function(x,y) {
    return x * y
}

