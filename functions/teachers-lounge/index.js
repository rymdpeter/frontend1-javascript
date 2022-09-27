// TODO: convert function to have single point of return
// TODO: 
function calc(x,y,operator) {
    let calculation
    x = Number(x)
    y = Number(y)
    if(isNaN(x) || isNaN(y)) { // check for missing or invalid input
        return("Invalid input. Numbers and numberish things only")
    }
    switch(operator) {
        case '+': calculation = (x,y) => x + y; break
        case '-': calculation = (x,y) => x - y; break
        case '*': calculation = (x,y) => x * y; break
        case '/': calculation = (x,y) => x / y; break
        default: return `Invalid operator. Accepted values are [ + - * / ]`
    }

    return `${x} ${operator} ${y} equals ${calculation(x,y)}`
}

const calculate = (x, operator, y) => {
    return calc(x,y,operator)
}

exports.example = calculate