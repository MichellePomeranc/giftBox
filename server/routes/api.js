const express = require('express')
const router = express.Router()
const gifts = require('../model/gift')
const providers = require('../model/providers')
const users = require('../model/users')
const request = require('request')
const apiKeyPlaces = "AIzaSyBKPQ9pTdtxhIeBZxzpAhVZB-CMi52cZH4"

// Get providers - breakfast
router.get("/breakfast/:providers", function(req, res){
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=breakfast+tel+aviv&key=${apiKeyPlaces}`, (err, response) => {
        const parsedResponse = JSON.parse(response.body)
        console.log(parsedResponse)
        res.send(parsedResponse)})
})

// let user1 = new users({name: "michelle", points: 500})
// user1.save()


// // Get cities in the DB and send it to the client
// router.get('/cities', (req, res)=>{
//     City.find({}).then(cities=>res.send(cities))
// })


module.exports = router