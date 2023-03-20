const express = require("express")
const shoeRouter = express.Router()


const shoes = [
    {
        name: "AF1",
        type: "sneakers",
        price: 100,
    },{
        name: "Uggs",
        type: "boots",
        price: 300,
    },{
        name: "Birkenstock",
        type: "sandals",
        price: 1000,
    },{
        name: "Chelsea",
        type: "boots",
        price: 120,
    },{
        name: "Teva",
        type: "sandals",
        price: 60,
    }
]

shoeRouter.get("/", (req,res) => {
    res.send(shoes)
})

shoeRouter.get("/search/type", (req,res) => {
    const type = req.query.type
    const filteredShoes = shoes.filter(shoe => shoe.type === type)
    res.send(filteredShoes)
})

module.exports = shoeRouter