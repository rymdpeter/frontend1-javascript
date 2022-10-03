// require is a NodeJS built in function to include external modules that exist in separate files.

// import import() & export() statements are used to refer to an ES module. Other modules with file types such as .json cannot be imported with these statements. They are permitted to be used only in ES modules and the specifier of this statement can either be a URL-style relative path or a package name.

// Fetches the json file as an object (data)
function requestUsers() {
  fetch("/data/public/AlexSaxena.json")
    .then((res) => res.json())
    .then(function (data) {
      generateTable(data);
    });
}
// Selects the main node
let main = document.querySelector("main");

function generateTable(data) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  // creates <tr> </tr>
  const row = document.createElement("tr");
  // creates <td> </td>
  const cell = document.createElement("td");
  // in this instance we are using the Array Function map to pick out individual elements from the data array
  data.users.map((user) => {
    let newCell = document.createElement("td");

    // TODO: Make titles bold
    // TODO: Line-break?

    //thCell.innerHTML =
    newCell.innerHTML = `First Name: ${user.firstname}<br> Last Name: ${user.lastname} <br> discord: ${user.discord}<br> <github: ${user.github}<br> <personalitytype: ${user.personalitytype}<br> birthyear:${user.birthYear}<br> zodiac: ${user.zodiac.name}<br> element: ${user.zodiac.element}<br> stone: ${user.zodiac.stone}<br> symbol: ${user.zodiac.symbol}<br> Start date: ${user.zodiac.dateMin}<br> End date: ${user.zodiac.dateMax}`;

    tblBody.append(newCell);
  });

  // add the row to the end of the table body
  tblBody.appendChild(row);

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>

  main.append(tbl);
  //document.body.appendChild(tbl);

  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

// Kill the Children
function removeAllElements() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}
// listens for a clickevent on the button and executes requestUsers() when a click occurs.
document.getElementById("tableButton").addEventListener("click", requestUsers);
document
  .getElementById("btn-remove-table")
  .addEventListener("click", removeAllElements);
