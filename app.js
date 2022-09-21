require("dotenv").config()
const prompt = require("prompt-sync")()
const path = (folder) => `${folder}/${process.env.GROUP_FOLDER_NAME || ''}`
require(path("./objects"))._setupGroups()
const student = require(path("./objects"))._getStudent
const students = require(path("./objects"))._getStudents
const group = require(path("./objects"))._getGroup
const calculate = require(path("./objects"))._calculate

const instructions = `

»»» I N S T R U C T I O N S »»»

help                         |   Help section
square [width] [height]      |   Calculate the area of a rectangle by providing width and height
students                     |   Gets all student-objects in an Array
student [index]              |   Gets a single student-object by index
group [index]                |   Returns a group by name or index
exit, q                      |   Quit program

`

console.clear();
console.log(`
JavaScript-1__TODO: ƒ
${instructions}
`)

let input = prompt('ƒ: ')

const execute = (input) => {
    let exit = false
	let command = input.split(' ');
	switch (command[0]) {
		case 'students':
			console.debug(students())
			break
        case 'student':
            console.debug(student(command[1]))
            break
        case 'group':   
            console.debug(group(command[1]))
            break
        case 'square':
        case 'calculate':
            calculate(command[1], command[2])
        case 'exit':
        case 'q': console.log("Bye!")
            input = null
            exit = true
            break
        case 'help':
		default:
			console.log(instructions)
            break
	}
    if(!exit) {
        input = prompt('ƒ: ')
        execute(input)
    }
}

execute(input)

