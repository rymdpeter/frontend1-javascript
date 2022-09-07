// Installera dependencies
const prompt = require('prompt-sync')()
console.debug(process)
// Deklarera variabler
const name = prompt("Who am I? ")
let age = prompt("How old am I? ")
console.log("Hello world, my name is " + name + ".")
console.log(`I'm ${age} years old.`)

/*
if(prompt("Is it my birthday (y/n)?") == "y") {
    console.log(`Hurray, now I'm ${age += 1}!`)
} else {
    console.log("ok")
}
    
*/

// console.log(
//     `
//        ^       ^      ///
//      ( * )   ( * )   //
//           (||)      /
//     (~____________~)
//         \______/
//     `
// )

// console.log(process.argv)

