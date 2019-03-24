document.addEventListener('DOMContentLoaded', function(event) {
    $(".toggle").click(function() {
        $(this).closest('div.title-bar').next("article").toggle();
    });
});