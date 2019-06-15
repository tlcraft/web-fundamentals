document.addEventListener('DOMContentLoaded', function(event) {
    let showElements = true;

    $('.title-bar').click(function() {
        $(this).next('article').toggle();
    });    

    $('.toggleAll').click(function() {
        showElements = !showElements;
        $(this).closest('section').children('section').children('article').toggle(showElements);
    }); 
    
    $('.topics-nav a').click(function() {
        openTopic($(this));
    });

    $('.toggleAll').click();   
    $('#css-examples .toggleAll').click();
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