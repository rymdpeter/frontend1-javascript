
// const students = require("./groups")
const students = require("../data/groups")

const allStudents = students.all // read students from imported module
let ambitionDefined
let groupsAssigned

function assignGroup(index, size) {
    let group = Math.floor((index + 1) / size) + 1
    let currentStudent = allStudents[index]

    currentStudent.group = group
    // console.log(currentStudent.firstname + " assigned to group: " + group)
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

function getStudent(index, email) {
    
    let currentStudent = allStudents[index]
    
    index++
    if (currentStudent.email.toLowerCase() === email) {
        selectedStudent = currentStudent
        return
    } else if (index < allStudents.length) {
        getStudent(index, email)
    } else {
        return false
    }
}
1
const setupGroups = () => {
    if(!groupsAssigned) {
        assignGroup(0, 6)
    }

    if (!ambitionDefined) { 
        // applyAmbition(0)
    }

    // console.debug(allStudents)

    const args = process.argv.slice(2)
    
    if(args.length > 0) {
      selectedStudent = getStudent(0, args[0])
      console.log(selectedStudent)
    } 
    
}

setupGroups()

