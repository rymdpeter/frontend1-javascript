console.log('Hello World from console');
// document.writeln("This is appended to the nodes in document.body") // this is the basic way to write to the document.
// console.log(document.getElementById("DocumentTitle").innerText);
// let input = prompt("Who are you?"); // prompt is available from the window-object, no need to import or install anything
// let href = document.location.href // document.location holds information about the url to the page
// let path = document.location.pathname
// console.log(href, path)

const init = function() {
	// console is still available, even if it is not 'the same' console, console.log works the same way. Start the developer-tools to read the output
	console.log('Hello World from console');
	// When javascript is running in a browser we have the 'document' object available as a global variable.
	console.log(document);
	// The document-object always have certain functions available, as well as all the html-tags represented as 'nodes' or objects in a tree structure

	// A basic way to write to the document (the part that a normal visitors looks at on a website) is to use the function document.write
	document.write("This is appended to the document.body as a 'textnode'"); // Careful! if the document is already loaded, all content will be overwritten.
	document.writeln("This is appended to the document.body as a 'textnode'"); // document.writeln does the same thing, but add a linebreak after each call

	// All pages have a 'body'-element <body> and a 'head'-element <head>
	console.log(document.body);
	console.log(docuemnt.head.title.innerText, document.title.innerText); // If the document has a title (up in the tab) we can reach the text of the element <title>...</title> by using the attribute 'innerText'

	// we don't have to loop through every node of a document to find a particular element. On way to make an element is to find is to set id="a-unique-id-following" inside the tag
	// like so: <h1 id="DocumentTitle">Frontend 1: Javascript</h1>
	// the function "document.getElementById" returns the node we're looking for.

	// innerText can also be used to assign a new value
	let headingElementNode = document.getElementById('DocumentTitle');
	let currentTitle = headingElementNode.innerText;
	let group = 'teachers-lounge';
	console.log(headingElementNode.innerText);
	headingElementNode.innerText = "Loot at me! I'm interactive!";
	headingElementNode.innerText = document.title = `${group} | ${currentTitle}`;

	// document.getElementByTagName returns an array of all elements with matching html-tags (in this case <section>... </section>)
	let sections = document.getElementByTagName('section');
	// we can loop through the array like any other array (.forEach(), etc) or select one by index
	section[0]; // returns the first one
	// If a tag has more than just text-content, we can have a look at the .innerHTML attribute and even set it. This overwrites any content in the elements child-nodes
	// The document-object also holds a function for creating new nodes
	let aNewParagraphNode = document.createElement('p');
	aNewParagraphNode.innerText =
		"I'm content from code. Later, I will be a problem but right now I'm new and exciting!";
	// All elements except the body has a parent, and the safest way to append content is to seek out the parent and append the new node as a child
	section[0].parentNode.appendChild(aNewParagraphNode);

	// Data in this format is very common when consuming APIs like http://localhost:3000/api/get
	let data = [
		{
			firstname: 'Peter',
			lastname: 'Karlsson',
			discord: 'rymdpeter#7078',
			group: 'teachers-lounge'
		},
		{
			firstname: 'Kevin',
			lastname: 'Solovjov',
			discord: 'Nightingale#1627',
			group: 'teachers-lounge'
		}
	];

	// appending listitem-elements, <li>...</li> would look something like this
	let ul = document.createElement('ul'); // Unordered list, html-notation for the common bullet-list
	document.getElementsByTagName('section')[0].parentNode.append(ul);
	data.forEach((e) => {
		let li = document.createElement('li');
		li.innerText = e.firstname + ' ' + e.lastname;
		ul.appendChild(li);
	});
};
// Fetch API
// console.log("Fetching group: " + group);
// fetch('http://localhost:3000/api/get/group/' + group)
//   .then((response) => response.json())
//   .then((data) => {

//   }
//   );

//   console.log("Fetching all teachers");
//   fetch('http://localhost:3000/api/get/')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//     });
