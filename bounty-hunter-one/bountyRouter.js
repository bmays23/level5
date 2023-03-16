const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounty = [
    {firstName: "john", lastName: "walker", living: true, bountyAmount: 3000, type: "sith", _id: uuidv4()}
]

bountyRouter.get("/", (req,res) => {
    res.send(bounty)
})


bountyRouter.post("/bounty", (req,res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send(`Added ${newBounty.firstName} to the database!`)
})









module.exports = bountyRouter