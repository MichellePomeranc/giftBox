const express = require('express')
const router = express.Router()
const gifts = require('../model/gift')
const providers = require('../model/providers')
const users = require('../model/users')
const request = require('request')
const apiKeyPlaces = "AIzaSyBKPQ9pTdtxhIeBZxzpAhVZB-CMi52cZH4"

// fake user do it one time
// let user=new users({
// name:"Michelle",
// credit: 500,
// gifts:[]
// })
// user.save()

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
    // users.find({} ,function(result){
    //     console.log(result)
    // })
    users.
    findOne({ name: 'Michelle' }, function(err,results){
        results.gifts.push(gift)
        results.save()
    })

})


module.exports = router