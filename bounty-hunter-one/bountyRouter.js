const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounty = [
    {firstName: "john", lastName: "walker", living: true, bountyAmount: 3000, type: "sith", _id: uuidv4()}
]

bountyRouter.get("/", (req,res) => {
    res.send(bounty)
})


bountyRouter.post("/", (req,res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send(`Added ${newBounty.firstName} to the database!`)
})

bountyRouter.delete("/:bountyID", (req,res) => {
    const bountyID = req.params.bountyID
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyID)
    bounty.splice(bountyIndex,1)
    res.send("Sucessfully deleted movie")
    
})

bountyRouter.put("/:bountyID", (req,res) => {
    const bountyID = req.params.bountyID
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyID)
    const updatedBounty = Object.assign(bounty[bountyIndex], req.body)
    res.send(updatedBounty)
})







module.exports = bountyRouter