const renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function () {
     await tempManager.getBreakfastData()
     renderer.renderData(tempManager.providers)
}

$('.btn').on('click', async function(){ 
    let x= await tempManager.showMyGifts("Michelle")
    renderer.renderBuyIt(x[0].gifts)
    loadPage()
    
})

$('#userPic').on('click', async function(){ 
    await show()
})
 const show = async() =>{
 let x=await tempManager.showUserInfo("Michelle")
 renderer.renderUserInfo(x)
}

$('.category').on('click','#buy', function(){
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

$("#userInfo").on("click",'#chargeBtn', function(){
    let input =parseInt($(this).siblings('#charge').val())
    tempManager.updateCredit(input,"Michelle");
    show()
    
})


    loadPage()