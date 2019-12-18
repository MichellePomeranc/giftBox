const renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function () {
     await tempManager.getBreakfastData()
     renderer.renderData(tempManager.providers)
}

// function initMap() {
//     var longitude = $("#lng").val();
//     var latitude  = $("#lat").val();              
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: latitude, lng: longitude},
//         zoom: 8
//     });
// }



$('.categories').on('click','#buy', function(){
    let name=$(this).siblings('.name').text()
    let price=$(this).siblings('.price').find('#shekels').text()
    let p=parseInt(price)
    let picture=$(this).siblings('.img-category').prop('src')
    
    let buy={
        name:name,
        price:p,
        picture:picture,
    }
    tempManager.toBuy(buy)
})

    loadPage()