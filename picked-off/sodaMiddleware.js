
const express = require("express")
const sodaMiddleware = express.Router()


sodaMiddleware.use("/", (req,res,next) => {
    console.log("The soda middleware was executed")
    next()
})

sodaMiddleware.use("/", (req,res,next) => {
    req.body = { soda: "Pepsi"}
    next()
})

sodaMiddleware.get("/", (req,res,next) => {
    console.log("Get request received")
    res.send(req.body)
})

module.exports = sodaMiddleware