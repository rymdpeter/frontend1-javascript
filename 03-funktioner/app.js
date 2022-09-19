// Functions can be declared by the reserved word function with parameters

function CalculateSquare(x,y) {
    return x * y // The return value can be assigned
}

function BasicFunction() {
    // code here
    // Not all functions have parameters and return values
} 

// And called by using the name and () with arguments

let s = CalculateSquare(4,4) // => 16

// Functions can also be held as the value of a variable
// They are called anonymous functions
const square = function(x,y) {
    return x * y
}
// 
let s1 = square(4,4)