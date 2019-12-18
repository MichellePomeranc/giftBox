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
        res.send(parsedResponse)
    })
})

//store gifts in db 
router.post('/cart',async function(req,response){
    let data=req.body
    users.findOne({})
    .populate( 'gifts')
    .exec(async function (err, res) {

        let gift=new gifts(data)
        if(res.gifts[0]==null && res.credit>gift.price){
            gift.save()
            await users.
            findOne({ name: 'Michelle'}, function(err,results){
                results.gifts.push(gift)
                results.save()
            })
            res.credit= res.credit-gift.price
            res.save();
        }
        else if(res.credit-res.gifts[res.gifts.length-1].price>0){
            let gift=new gifts(data)
            gift.save()
            await users.
            findOne({ name: 'Michelle'}, function(err,results){
                results.gifts.push(gift)
                results.save()
            })
        res.credit= res.credit-res.gifts[res.gifts.length-1].price
        res.save();
        }
        else{
            response.send("0")
        }
    
    })
})

router.get("/getMyGiftDB/:userName", async function(req, res){
    let myGifts= await users.find({name : req.params.userName}).populate("gifts").exec(function(err, result){
    // console.log(result)
    res.send(result)
    })
})


module.exports = router