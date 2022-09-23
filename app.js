

require("dotenv").config()
const prompt = require("prompt-sync")()
const clc = require("cli-color")
const example = require("./functions").index
let folder = process.env.GROUP_FOLDER_NAME || ''
let pathToObjects = folder ? `./objects/${folder}` : "./objects"
const { setupGroups, student, students, group } = require(pathToObjects)


console.clear();
console.log(`
nackademin-dot-js

Available examples:
example: example [x] [operator] [y] ${clc.yellow("[EXAMPLE FUNCTION] this is an example function for debugging-purposes")}
Students: students
Student: student [index]
Group: group [index] ${clc.greenBright("[ATTENTION] This is the excercise. Go to objects/Readme.md instructions")}
`)

let promptMessage = `(${folder}) ${clc.greenBright(" ƒ: ")}`
let input = prompt(promptMessage)
setupGroups()
let exit = false
const execute = (input) => {
    
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
        case 'example':
        case 'square':
        case 'calculate':
            console.log(example(command[1], command[2]))
            break
        case 'exit':
        case 'q': console.log("Exiting front end")
            process.exit()
            break
		default:
			console.log("Unknown function.")
            break
	}
    if(exit) execute("exit")

    input = prompt(promptMessage)
    execute(input)
    
}

execute(input)

