require("dotenv").config()
const prompt = require("prompt-sync")({sigint: true})
const clc = require("cli-color")
const {server} = require("./www/server")
const { setupGroups, student, students, group, teachers } = require('./objects')
const example = require('./functions')


const envFolder = process.env.GROUP_FOLDER_NAME || ""
const help =`
Use ${clc.yellow("help")} if you need help and ${clc.yellow("quit")} if you want to quit

Available actions:
example: example [x] [operator] [y] ${clc.yellow("[EXAMPLE FUNCTION] this is an example function for debugging-purposes")}
Students: students
Student: student [index]
Group: group [index] ${clc.greenBright("[ATTENTION] This is the excercise. Go to objects/Readme.md for instructions")}
`
console.clear()
console.log(clc.greenBright("nackademin-dot-js (v1.0.0)"))

let promptMessage = `(${envFolder}) ${clc.greenBright(" ƒ: ")}`

setupGroups()
let input = ""
if(process.argv.splice(2).length > 0) {
    input = process.argv.splice(2).join(" ")
}
    
function execute(input) {
        let command = input.split(' ')
        

        switch (command[0]) {
            case 'list': 
                console.debug([...students(), ...teachers()]) // merge the two arrays of student- and teacher-objects
                break
            case 'students':
               console.debug(students())
                break
            case 'student':
                console.debug(student(command[1]))
                break
            case 'group':   
                console.debug(group(command[1]))
                break
            case 'server':
                server()
                break
            case 'example':
            case 'square':
            case 'calculate':
                console.log(example(command[1], command[2], command[3]))
                break
            case 'exit':
            case 'quit':
            case 'q': 
                console.log("Exiting front end")
                process.exit()
            case 'help':
            default:
                console.log(help)
                break
        }
    
        input = prompt(promptMessage)
        execute(input)
    

    
    
}

execute(input)

