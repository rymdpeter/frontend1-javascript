
const prompt = require("prompt-sync")()
exports.module(() => {
let x;
// console.log(x)

x = 1;   

switch(x) {
    case "1": console.log("1");
    break;
    case "2": console.log("2");
    break;
    case "3": console.log("2");
    break;
}

if(1 === parseInt('1'))
    console.log(parseInt('abc'))

console.log("it's true!")

})



// x is a number
// x = '1'; // x is a string
// x = [1]; // x is an array
// 1 == '1';
// 1 == [1];
// '1' == [1];
// 1 === '1';
// 1 === [1];
// '1' === [1];

// let age = parseInt(prompt("How old am I? ")) // TODO: typecheck
// let birthday = prompt("Is it my birthday (y/n)?").trim().toLowerCase()




// if (birthday == "y" || birthday === "yes") {
//     console.log(`Hurray, now I'm ${ age += 1 }!`)
// } if (birthday === "n" || birthday === "no"){
//     console.log(`I'm ${age} years old.`)
// }