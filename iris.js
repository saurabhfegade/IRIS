$(document).ready(function () {


    // IRIS
    $(".inspire,.resonate,.integrate,.succeed").on('mouseenter', function () {
        $(this).addClass("animated rubberBand");
    });
    $(".inspire,.resonate,.integrate,.succeed").on('mouseleave', function () {
        $(this).removeClass("animated rubberBand");
    });

    // FORCE PAGE TO LOAD FROM TOP (0,0) ON EVERY LOAD
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    //CLICK TO SCROLL DOWN
    $('#d-arrow').on('click', function (e) {
        e.preventDefault();
        $("html").scrollTop(0);
        // body...
        $('html,body').animate({
            scrollTop: $('.scrollable').offset().top - 64
        }, 1500, 'linear');
    })
    //AOS-animate on scroll
    AOS.init();


    // MATERIALIZE INITIALIZATION
    $('.sidenav').sidenav({
        width: 240,
        draggable: true,
        inDuration: 400,
        outDuration: 400
    })
        .on('click tap', "#mylink", () => {
            $('.sidenav').sidenav('close');
        });

    $(".dropdown-trigger").dropdown();

    //ADDING BLACK BG_COLOR TO NAVBAR AFTER 300px SCROLL FROM TOP
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.nav-wrapper').addClass('black');
            // $('.brand-logo > #mylogo').addClass('animated zoomIn');
        }
        else {
            $('.nav-wrapper').removeClass('black');
            // $('.brand-logo > #mylogo').removeClass('animated zoomIn');
        }
    });


});

$('.sameLink').on('click', function () {
    $('.sidenav').sidenav('close');
});
function toggleDd() {
    // alert();
    $('.dropdown-trigger').removeClass('closed').addClass('opened').dropdown('open');

    if ($('.dropdown-trigger').has('opened')) {
        $('.dropdown-trigger').removeClass('opened').addClass('closed');
        $('.dropdown-trigger').dropdown('close');
    }





    // HEMANT
    $("figure").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

}