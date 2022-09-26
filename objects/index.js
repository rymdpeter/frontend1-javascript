
const students = require("./groups")

const allStudents = students.all // read students from imported module
let ambitionDefined,
    groupsAssigned


function assignGroup(index, size) {
    allStudents.sort((a, b) => (a.hoursPerWeek > b.hoursPerWeek ? 1 : -1));//Sorterar arrayen efter antal timmar arbetade
    allStudents.sort((a, b) => (a.hasJob > b.hasJob ? 1 : -1));//Sorterar arrayen efter om de har jobb eller inte

    let group = Number(Math.floor((index + 1) / size) + 1)
    students.all[index].group = group
    index++

    if(index >= students.all.length) {
        return true   
    } 
    assignGroup(index, size)
}
// TODO: Time isn't everything. Or is it?
function applyAmbition(index) {
    // TODO: should scheduled time in the classroom be accounted for?
    students.all[index].hoursPerWeek = Math.floor(Math.random() * 24)
    // Some examples of attributes for inspiration. Booleans can be used on their own or grouped in an anonymous object
    //students.all[index].hasJob = true
    let job = Math.random();
        if (job <= 0.5)
            students.all[index].hasJob = true
        else
            students.all[index].hasJob = false
    //  students.all[index].personalityType = {
    //      red: false, blue: false, green: true, yellow: false
    //   }
    // ... 
    index++

    if (index >= students.all.length) {
        return true // remember that it's good practice to have single point of return for a function
    }
    applyAmbition(index)
}

const getStudent = (index) => {
    let i = Number(index) 
    if (isNaN(i) || students.all.length > i) i = 0 // TODO: fix this. What happens when we don't get good input?
    else i = index
    return students.all[i]
}
const getStudents = () =>{
    return students.all
}

const setupGroups = (size) => {
    
    ambitionDefined = applyAmbition(0)
    groupsAssigned = assignGroup(0,size) // TODO: maybe this need more thought?

    return students.all   
}
// TODO: return an array with only the students that belongs to a group with a specific index
const getGroup = (arg) => {
    return  students.all.filter((student)=>student.group==arg);
   

}

exports.students = getStudents
exports.student = getStudent
exports.setupGroups = setupGroups
exports.group = getGroup
