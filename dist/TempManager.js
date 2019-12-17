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
        for(let r of data.results){
            let provider={name: r.name,
                address: r.formatted_address,
                picture:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${r.photos[0].photo_reference}&key=AIzaSyBKPQ9pTdtxhIeBZxzpAhVZB-CMi52cZH4`,
                 rating: r.rating}
        
                this.providers.push(provider)
      }
       console.log(this.providers[0].picture)

    console.log(this.providers)
    } 

    async toBuy(category){

        await  $.post('/cart', category, function(err){
            console.log("all-Good")
        })
    }
}