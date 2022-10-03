require('dotenv').config();
const zodiac = require('zodiac-signs')('sv-SE')
// const f_bot = require("./f_bot").init
const prompt = require('prompt-sync')({ sigint: true });
const clc = require('cli-color');
const readline = require('readline');
const fs = require('fs');
const { setupGroups, student, students, group, teachers } = require('./objects');
const example = require('./functions');
const open = require('open');
const uuidv4 = require('uuid').v4
const pm2 = require('pm2')
const pathjson = require('./www/public/group-4/data.json');

const envFolder = process.env.GROUP_FOLDER_NAME || '';
const splash = `
𝄢_𝓈𝓉𝒶𝒸𝓀.-𝒿𝓈 
`
const help = `
Use ${clc.yellow('help')} if you need help and ${clc.yellow('quit')} if you want to quit.

Available actions:
example: example [x] [operator] [y] ${clc.yellow('[EXAMPLE FUNCTION]')}
Students: students
Student: student [index]
Group: group [index])}
`
console.clear();
console.log(clc.greenBright(splash));

let promptMessage = `${clc.cyan('(' + envFolder + ')')} ${clc.greenBright(' 𝄢. ')}`;

setupGroups();
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
    prompt: promptMessage
})
rl.on("line", (line) => {
    execute(line)
})
rl.on('keypress', async (s,k) => {
    setTimeout(function() {
        rl._refreshLine(); // force refresh colors
       
    }, 0)
})


let personalInfo = {};
console.log(clc.redBright('BERÄTTA OM DIG SJÄLV'));
console.log('Förnamn'); 
personalInfo.firstname = prompt(promptMessage);
console.log('Efternamn');
personalInfo.lastname = prompt(promptMessage);
console.log('Discord(namn#nr)');
personalInfo.discord = prompt(promptMessage);
console.log('Github användarnamn');
personalInfo.github = prompt(promptMessage);
console.log('Favorit mat');
personalInfo.mat = prompt(promptMessage);
console.log('Personlighetstyp (gul, grön, röd, blå)');
personalInfo.personalityType = prompt(promptMessage);
console.log('Födelsemånad (1-12)');
const date = {
	month: 1,
	day: 1
};
date.month = prompt(promptMessage);
console.log('Födelsedag (1-31) \n');
date.day = prompt(promptMessage);
console.log('Födelseår fyra siffror');
personalInfo.birthYear = prompt(promptMessage);
personalInfo.zodiac = zodiac.getSignByDate(date);

pathjson.push(personalInfo);
fs.writeFileSync('./www/public/group-4/data.json', JSON.stringify(pathjson),'utf-8');
personalInfo._SECRET_KEY = uuidv4();



function execute(input) {
    console.log(input)
	let command = input.split(' ');
	switch (command[0]) {
        case 'www':
            open(`http://localhost:${process.env.EXPRESS_PORT || 3000}`)
            break
        case 'api':
            open(`http://localhost:${process.env.EXPRESS_PORT || 3000}/api`)
            break
		case 'list':
			console.debug([ ...students(), ...teachers() ]); // merge the two arrays of student- and teacher-objects
			break;
		case 'students':
			console.debug(students());
			break;
		case 'student':
			console.debug(student(command[1]));
			break;
		case 'group':
			console.debug(group(command[1]));
			break;
		case 'example':
			console.log(example(command[1], command[2], command[3]));
			break;
		case 'exit':
		case 'quit':
		case 'q':
			console.log('Exiting front end');
            pm2.stop('all')
			process.exit()
		case 'help':
		default:
			console.log(help);
			break;
	}
	rl.prompt()
}
rl.prompt()
