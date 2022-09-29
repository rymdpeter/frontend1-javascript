require("dotenv").config()
const open = require("open")
const express = require("express")
const path = require("path")
const { setupGroups, student, students, group, teachers } = require("../objects")

const app = express(),
port = process.env.EXPRESS_PORT || 3000,
logger = function(req, res, next) {
    console.log("serving " + req.path)
    next()
}

app.use(logger)

app.use(express.static(path.join(__dirname, "public")))

app.get('/api', (req, res) => {
  res.json({
    "name": "nackademin-dot-js api version 1.0.0",
    "endpoints": {
      "/api/get": "returns a list of all objects (students.all and teachers.all)",
      "/api/get/teachers": "returns a list of all teachers (teachers.all)",
      "/get/:index": "returns the person at index)",
      "/get/:key/:content":"returns the student that has values in attributes :key that matches value :content",
      "/group/:name": "returns the group with selector 'name' (getGroup(name)",
    }
  })
})

app.get('/api/get', (req, res) => {
  res.json([...students(),...teachers()])
})
app.get('/api/get/teachers', (req, res) => {
  res.json(teachers())
})
app.get('/api/get/:key/:content', (req, res) => {  
  let all = [...students(),...teachers()]
  res.json(all.filter(e => e[req.params.key] == req.params.content))
})
app.get('/api/group/:name', (req, res) => {
  res.json(group(req.params.name))
})
const server = () => app.listen(port, () => {
  setupGroups()
  console.log(`Frontend app running on http://localhost:${port}`)
  // open(`http://localhost:${port}`)
})


exports.server = server()