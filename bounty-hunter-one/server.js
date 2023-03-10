const express = require("express")
const app = express()

app.use(express.json())

const bounty = [
    {firstName: "john", lastName: "walker", living: true, bountyAmount: 3000, type: "sith"}
]

app.get("/bounty", (req,res) => {
    res.send(bounty)
})


app.post("/bounty", (req,res) => {
    const newBounty = req.body
    bounty.push(newBounty)
    res.send(`Added ${newBounty.firstName} to the database!`)
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})