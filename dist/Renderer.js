
class Renderer {
    renderData(providers) {
        let source = $('#container-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template( {providers} );
        $('#providers-container').empty().append(newHTML);
    }
}