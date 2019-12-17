const express = require('express')
const router = express.Router()
const gifts = require('../model/gift')
const providers = require('../model/providers')
const users = require('../model/users')
const request = require('request')
const apiKeyPlaces = "AIzaSyBKPQ9pTdtxhIeBZxzpAhVZB-CMi52cZH4"

// Get providers - breakfast
router.get("/breakfast", function(req, res){
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=breakfast+tel+aviv&key=${apiKeyPlaces}`, (err, response) => {
        const parsedResponse = JSON.parse(response.body)
        console.log(parsedResponse)
        res.send(parsedResponse)})
})

//store gifts in db 
router.post('/cart',function(req,res){
    let data=req.body
    console.log(data)
    let gift=new gifts(data)
    gift.save()
})


module.exports = router