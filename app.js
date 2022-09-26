

require("dotenv").config()
const prompt = require("prompt-sync")()
const clc = require("cli-color")
const example = require("./functions").index
let folder = process.env.GROUP_FOLDER_NAME || ''
let pathToObjects = folder ? `./objects/${folder}` : "./objects"
const { setupGroups, student, students, group } = require(pathToObjects)



const help =`
nackademin-dot-js
Use ${clc.yellow("help")} if you need help and ${clc.yellow("quit")} if you want to quit

Available examples:
example: example [x] [operator] [y] ${clc.yellow("[EXAMPLE FUNCTION] this is an example function for debugging-purposes")}
Students: students
Student: student [index]
Group: group [index] ${clc.greenBright("[ATTENTION] This is the excercise. Go to objects/Readme.md for instructions")}
`
console.clear()
console.log(help)

let promptMessage = `(${folder}) ${clc.greenBright(" ƒ: ")}`
let input = prompt(promptMessage)
setupGroups(6)
let exit = false
const execute = (input) => {
    
	if(input) {
        let command = input.split(' ') 
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

                case 'setup':
                    console.debug(setupGroups(command[1]))
                    break
            case 'example':
            case 'square':
            case 'calculate':
                console.log(example(command[1], command[2], command[3]))
                break
            case 'exit':
            case 'quit':
            case 'q': console.log("Exiting front end")
                process.exit()
                break
            case 'help':
            default:
                console.log(help)
                break
        }
    } 
	
    if(exit) execute("exit")

    input = prompt(promptMessage)
    execute(input)
    
}

execute(input)

