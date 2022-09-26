console.log("Hello World from console");
// document.writeln("This is appended to the nodes in document.body") // this is the basic way to write to the document. 
// console.log(document.getElementById("DocumentTitle").innerText);

const init = function() {

// console.log("Fetching all students");
// fetch('http://localhost:3000/api/get/')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let group = "teachers-lounge";
console.log("Fetching group: " + group);
fetch('http://localhost:3000/api/group/' + group)
  .then((response) => response.json())
  .then((data) => {
    let currentTitle = document.getElementById("DocumentTitle").innerText;
    document.getElementById("DocumentTitle").innerText = group + " | " + currentTitle;
    console.log(data);
  } );
}