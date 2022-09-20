
const students = require("./groups")
// const students = require("../data/groups")

const allStudents = students.all
let ambitionDefined = false
let groupsAssigned = false

function assignGroup(index, size) {
    let group = Math.floor((index + 1) / size) + 1
    let currentStudent = allStudents[index]

    currentStudent.group = group
    console.log(currentStudent.firstname + " assigned to group: " + group)
    index++

    if(index < allStudents.length) {   
        assignGroup(index, size)
    } else {
        groupsAssigned = true
    }
}

function applyAmbition(index) {
    let currentStudent = allStudents[index]
    currentStudent.hoursPerWeek = Math.floor(Math.random() * 24)
    index++

    if (index < allStudents.length) {
        applyAmbition(index)
    } else {
        ambitionDefined = true
        
    }
}

const setupGroups = () => {
    if(!groupsAssigned)
        assignGroup(0, 6)

    if (!ambitionDefined)
        applyAmbition(0)
    
    // console.debug(allStudents)
}

setupGroups()

