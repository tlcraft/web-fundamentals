document.addEventListener('DOMContentLoaded', function(event) {
    let showHtmlElements = true;
    let showCssElements = true;
    let showJsElements = true;

    $('.title-bar').click(function() {
        $(this).next('article').toggle();
    });    


    $('#html-examples .toggleAll').click(function() {
        showHtmlElements = !showHtmlElements;
        $(this).closest('section').children('section').children('article').toggle(showHtmlElements);
    }); 

    $('#css-examples .toggleAll').click(function() {
        showCssElements = !showCssElements;
        $(this).closest('section').children('section').children('article').toggle(showCssElements);
    }); 

    $('#js-examples .toggleAll').click(function() {
        showJsElements = !showJsElements;
        $(this).closest('section').children('section').children('article').toggle(showJsElements);
    }); 
    
    $('.topics-nav a').click(function() {
        openTopic($(this));
    });

    $('#html-examples .toggleAll').click();   
    $('#css-examples .toggleAll').click();
    $('#js-examples .toggleAll').click();
});

function openTopic(link) {
    var id = link.attr('href');
    if(id !== '#') {
        var article = $(id).closest('div.title-bar').next('article');
        if(!article.is(":visible")) {
            article.toggle();
        }
    }
}