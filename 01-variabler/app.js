// Installera dependencies
const prompt = require("prompt-sync")()

const name = prompt("Who am \"I\"? ") 
let age = parseInt(prompt("How old am I? ")) // TODO: typecheck

console.log("Hello world, I'm " + name + ".")

let birthday = prompt("Is it my birthday (y/n)?").trim().toLowerCase()
if (birthday == "y" || birthday === "yes") {
    console.log(`Hurray, now I'm ${ age += 1 }!`)
} if (birthday === "n" || birthday === "no"){
    console.log(`I'm ${age} years old.`)
}
 else {
    console.log("ok")
}
    



// console.log(process.argv)
