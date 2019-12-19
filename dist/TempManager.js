class TempManager {
    constructor() {
        this.providers = []
    }

    async getDataFromDB() {
        let data = await $.get(`/breakfast`)
        this.giftsData = data
        return data
    }
    async getBreakfastData(providers) {
        let data = await $.get(`/breakfast`)
        console.log(data)
        for (let r of data.results) {
            let provider = {
                name: r.name,
                address: r.formatted_address,
                picture: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${r.photos[0].photo_reference}&key=AIzaSyBKPQ9pTdtxhIeBZxzpAhVZB-CMi52cZH4`,
                rating: r.rating,
                lng: r.geometry.location.lng,
                lat: r.geometry.location.lat
            }
            this.providers.push(provider)
        }
    }
    async toBuy(category) {
        let x = await $.post('/cart', category);
        console.log(x)
        if (x == "0") {
            alert("You Dont Have enungh money")
        }
    }

    showMyGifts = async function (userName) {
        let myGifts = await $.get(`/getMyGiftDB/${userName}`)
        return myGifts
        
    }

    async showUserInfo(userName){
        let data= await $.get(`/user/${userName}`)
        return data
    }
    async updateCredit(input,userName){
        let credit=await $.post(`/user/${userName}/${input}`)
        return credit
    }
}
