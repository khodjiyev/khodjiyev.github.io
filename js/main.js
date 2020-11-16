$(document).ready(function () {
    $('#menu-button').click(function () {
        $('menu').toggleClass('active')
    })
    $('section').click(function () {
        $('menu').removeClass('active')
    })
});


