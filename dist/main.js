const renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function () {
     await tempManager.getBreakfastData()
     renderer.renderData(tempManager.providers)
}

$('.myGifts').on('click', function(){ 
    tempManager.showMyGifts("Michelle")
    
})


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