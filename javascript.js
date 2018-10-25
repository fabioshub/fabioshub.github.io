$( document ).ready(function() {
    $(".introtext").hide()
    $(".introtext").fadeIn(2000)

    $(".codebutton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".jum2").offset().top
        }, 1000);
    });
    $(".socialbutton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".socialpart").offset().top
        }, 1000);
    });
});
