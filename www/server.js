require("dotenv").config()
const open = require("open")
const express = require("express")
const path = require("path")
const { setupGroups, student, students, group } = require("../objects")

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
    "hello": "world"
  })
})

app.get('/api/get', (req, res) => {
  res.json(students())
})
app.get('/api/get/:index', (req, res) => {
  res.json(student(req.params.index))
})
app.get('/api/group/:index', (req, res) => {
  res.json(group(req.params.index))
})



app.listen(port, () => {
  setupGroups()
  console.log(`Frontend app running on http://localhost:${port}`)
  open(`http://localhost:${port}`)
})