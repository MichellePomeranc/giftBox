class TempManager {
    constructor() {
        this.giftsData = []
    }

    async getDataFromDB() {
        let data = await $.get(`/breakfast`)
            this.giftsData = data
            return data
    }

    async getBreakfastData(providers) {
        let data = await $.get(`/breakfast/${providers}`)
        this.providers.push({
            name: data.name,
            address: data.formatted_address,
            map: this.data.geometry/location,
            picture: this.photo,
            rating: this.rating
    })
    console.log(providers)
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