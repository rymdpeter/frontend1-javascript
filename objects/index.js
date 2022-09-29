const students = {}
const teachers = {}

function init (context) {
    students.all = context.data.students
    teachers.all = context.data.teachers
    assignGroup(0,6)
    applyAmbition()
}
function assignGroup(index, size) {
    let group = Math.floor((index + 1) / size) + 1
    students.all[index].group = group
    index++

    if(index >= students.all.length) {
        return true   
    } 
    assignGroup(index, size)
}

function applyAmbition() {
    students.all.forEach(student => student.hoursPerWeek = Math.floor(Math.random() * 24))
}

function apply (callback, selection, action) {

    if (selection.length > 0) {
        result = action(selection)
    } else {
        result = "Selection is empty, nothing to do."
    }
    return callback ?
        callback(result)
        : result
}

function get(callback) {
    let everyone = [...students.all, ...teachers.all]
    everyone.forEach(person => person.hasJob = true)
    return callback ?
        callback(everyone)
        : everyone
}

function query(callback, content, key) {
    let everyone = [...students.all, ...teachers.all] // merges the two arrays
    let index = parseInt(query)
    let result = []
    
    if(!isNaN(index)) {
        result.push(everyone[index]) // If the query is just an integer, we return the person at that index
    } else {
        key = key || 'email'
        result = everyone.filter(person => person[key] && person[key] == content) // group-numbers are stored as integers, so we use == to make comparison easier
    }
    
    return callback ? 
        callback(result)
        : result
}

exports.init = init
exports.list = get
exports.query = query
exports.apply = apply
