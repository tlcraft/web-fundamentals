document.addEventListener('DOMContentLoaded', function(event) {
    let showElements = true;

    $('.toggle').click(function() {
        $(this).closest('div.title-bar').next('article').toggle();
    });

    $('.toggleAll').click(function() {
        showElements = !showElements;
        $(this).closest('section').children('section').children('article').toggle(showElements);
    }); 
    
    $('.toggleAll').click();
});