$(document).ready(function () {
    $("#menu").click(function () {
        $(".about").hide();
        $(".menu").toggle();
    });

    $("#about").click(function () {
        $(".menu").hide();
        $(".about").toggle();
    });
});