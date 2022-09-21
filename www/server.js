require("dotenv").config()
const open = require("open")
const express = require("express")
const path = require("path")

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



app.listen(port, () => {
  console.log(`Frontend app running on http://localhost:${port}`)
  open(`http://localhost:${port}`)
})