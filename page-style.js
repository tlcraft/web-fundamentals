document.addEventListener('DOMContentLoaded', function(event) {
    $(".toggle").click(function() {
        $(this).closest('section').find("article").toggle();
    });
});