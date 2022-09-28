console.log("Hello World from console");
// document.writeln("This is appended to the nodes in document.body") // this is a basic way to write to the document. 
console.log(document.body)
// console.log(document.getElementById("DocumentTitle").innerText);

// const init = function() {
// console.log(document.getElementById("DocumentTitle").innerText);
// document.writeln("This is appended to the nodes in document.body") // this is a basic way to write to the document. 
// }
function init() {
    let titleElement = document.getElementById("DocumentTitle");// .innerText = "Jag är en ändrad text";
    let newP = document.createElement("p");
    newP.innerText="Jag är innehåll från kod.";
    titleElement.parentNode.append(newP);
}