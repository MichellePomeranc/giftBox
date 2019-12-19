
class Renderer {
    renderData(providers) {
        let source = $('#container-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template( {providers} );
        $('#providers-container').empty().append(newHTML);
    }
    renderBuyIt(products){
        let source = $('#container-dropDown').html();
        let template = Handlebars.compile(source);
        let newHTML = template({products});
        $('.dropdown-menu').empty().append(newHTML);
    }
    renderUserInfo(user){
        let source = $('#container-userInfo').html();
        let template = Handlebars.compile(source);
        let newHTML = template(user);
        $('#userInfo').empty().append(newHTML);
    }
}