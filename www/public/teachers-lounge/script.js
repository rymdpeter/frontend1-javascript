console.log("Hello World from console");
// document.writeln("This is appended to the nodes in document.body") // this is the basic way to write to the document. 
// console.log(document.getElementById("DocumentTitle").innerText);
// let input = prompt("Who are you?"); // prompt is available from the window-object, no need to import or install anything
// let href = document.location.href // document.location holds information about the url to the page
// let path = document.location.pathname
// console.log(href, path)
 
const init = function() {

let group = "teachers-lounge";
let currentTitle = document.getElementById("DocumentTitle").innerText;
let descriptionNode = document.getElementById("MainDescription");
let tableDataNode = document.getElementById("TableData");
// descriptionNode.innerText = "Välkommen till lärarrummet :)"

console.log("Fetching group: " + group);
fetch('http://localhost:3000/api/get/group/' + group)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("DocumentTitle").innerText = group + " | " + currentTitle;
    console.log("Appending all teacher-objects to document")

      for(let i in data) {
        let person = data[i];
        let row = document.createElement("tr");
        tableDataNode.appendChild(row);
        row.innerHTML = `<td>${person.firstname}</td><td>${person.lastname}</td><td>${person.discord}</td>`
      }
  } 
  );

  console.log("Fetching all teachers");
  fetch('http://localhost:3000/api/get/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    });
}