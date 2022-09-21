
 const students = require("./groups")
// const students = require("../data/groups")

const allStudents = students.all // read students from imported module
let ambitionDefined,
    groupsAssigned


function assignGroup(index, size) {
    let group = Math.floor((index + 1) / size) + 1
    students.all[index].group = group
    index++

    if(index >= students.all.length) {
        return true   
    } 
    assignGroup(index, size)
}

function applyAmbition(index) {
    // TODO: Time isn't everything
    // TODO: Scheduled time in the classroom should be accounted for?
    students.all[index].hoursPerWeek = Math.floor(Math.random() * 24)
    // students.all[index].hasJob = true 
    // ... 
    index++

    if (index >= allStudents.length) {
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

const setupGroups = () => {
    
    ambitionDefined = applyAmbition(0)
    groupsAssigned = assignGroup(0, 6) // TODO: maybe this need more thought?

    return students.all   
}
// TODO: return an array with only the students that belongs to a group with a specific index
const getGroup = (arg) => {
    return({
        TODO: "return group " + arg
        // students: students.all.splice(11,6) // TODO: this works as long as the array of students is sorted by group. Also the size 
    })
}

exports._setupGroups = setupGroups
exports._getStudents = getStudents
exports._getStudent = getStudent
exports._getGroup = getGroup
exports._getStudent = getStudent

