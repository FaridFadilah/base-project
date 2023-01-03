const express =  require("express")
const bodyParser =  require("body-parser")
const cors =  require("cors")
const db = require("./app/models")
const responseHelper = require('express-response-helper').helper()
const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(responseHelper)

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
  res.respond({ message: "Welcome to base project" })
})

app.get("/user", async (req, res) => {
  const users = await db.User.findAll()
  res.respond({ data: users })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})