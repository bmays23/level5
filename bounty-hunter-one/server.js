const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')


//Middleware//
app.use(express.json())

//Routes//
app.use("/bounty", require("./bountyRouter.js"))


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})