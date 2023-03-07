const express = require("express")
const app = express()



//1. Endpoint/mount path 2. Callback function
app.get("/userdata", (req,res) => {
    res.send({name: "brittany", age:29})
})




//1. Port 2: Callback
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})