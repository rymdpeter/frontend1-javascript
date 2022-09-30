console.log("Hello World from console");
// document.writeln("This is appended to the nodes in document.body") // this is a basic way to write to the document. 
console.log(document.body,"Det här står i public/script.js");
// console.log(document.getElementById("DocumentTitle").innerText);

// const init = function() {
// console.log(document.getElementById("DocumentTitle").innerText);
// document.writeln("This is appended to the nodes in document.body") // this is a basic way to write to the document. 
// }
function init() {
    let titleElement = document.getElementById("DocumentTitle");// hämtar elementet i document? med id DocumentTitle
    let newP = document.createElement("p"); // skapar ett nytt element i document? med taggen p
    newP.innerText="Jag är innehåll från kod.";//lägger till text till elementet
    titleElement.parentNode.append(newP); //lägger till newP som child till 
}