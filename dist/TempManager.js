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
        
    }

//     async saveCity(cityName){
//         for(let c of this.cityData){
//             if(c.name == cityName && c.saved == false){
//               await  $.post('/city', c, function(err){
//                 c.saved==true
//                 console.log(c.name + ' was saved to the DB')
//               })
//             } 
//         }
//     }

//     removeCity(cityName) {
//         const unsavedCity = $.ajax({
//             url: `/city/${cityName}`,
//             method: "delete",
//             success: function (res) {
//                 return res
//             }
//         })
//         let index = this.cityData.findIndex(c => c.name == cityName) 
//         this.cityData.splice(index,1)
//     }
}