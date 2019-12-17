const renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function () {
     let data= await tempManager.getBreakfastData()
     renderer.renderData(tempManager.providers)
}


    loadPage()
    


