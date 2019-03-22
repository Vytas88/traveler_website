$(document).ready(function() {
    $('.like-heart').click(function() {
        $('.like-heart').removeClass('active');
        $(this).closest('.like-heart').addClass('active')
    });
});
