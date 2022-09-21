

require("dotenv").config()
const prompt = require("prompt-sync")()
const path = (folder) => `${folder}/${process.env.GROUP_FOLDER_NAME || ''}`
require(path("./objects"))._setupGroups()
const student = require(path("./objects"))._getStudent
const students = require(path("./objects"))._getStudents
const group = require(path("./objects"))._getGroup
const calculate = require(path("./objects"))._calculate

console.clear();
console.log(`
Welcome to Frontend 1!
Available examples:
Functions: square [x] [y]
Students: students
Student: student [index]
Group: group [index]
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
        case 'q': console.log("Exiting front end")
            input = null
            exit = true
            break
		default:
			console.log("Unknown function, type")
            break
	}
    if(!exit) {
        input = prompt('ƒ: ')
        execute(input)
    }
}

execute(input)


// console.debug(process.env)
