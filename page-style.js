document.addEventListener('DOMContentLoaded', function(event) {
    let showElements = true;

    $('.toggle').click(function() {
        $(this).closest('div.title-bar').next('article').toggle();
    });

    $('.toggleAll').click(function() {
        showElements = !showElements;
        $(this).closest('section').children('section').children('article').toggle(showElements);
    }); 
    
    $('.topics a').click(function() {
        openTopic($(this));
    });
    
    $('.side-nav a').click(function() {
        openTopic($(this));
    });
    
    $('.section-topics a').click(function() {
        openTopic($(this));
    });

    $('.toggleAll').click();
});

function openTopic(link) {
    var id = link.attr('href');
    var article = $(id).closest('div.title-bar').next('article');
    if(!article.is(":visible")) {
        article.toggle();
    }
}