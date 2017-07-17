console.log($);

$(document).ready(function() {

    new WOW().init();


    $(function() {
        $(".element-test").typed({
            strings: [
                "<h5> Hi, I'm Rhys </h5>", "<h5>And I have an unusual story to share with you...</h5>", "<h5>It's about a law graduate who left the legal profession</h5>", "<h5>to become a front-end developer... </h5>", "<h5>Click the button below to find out more.</h5>", " ",
            ],
            typeSpeed: 1,
            callback: function() {
                $(".my-butt").removeClass("none");
                $(".my-butt").addClass("animated flipInY hvr-grow-rotate");
            },
        });
    });


    $(".about-me-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 'slow');
    });

    $(".education-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".education").offset().top
        }, 'slow');
    });

    $(".skills-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 'slow');
    });

    $(".work-experience-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".work-experience").offset().top
        }, 'slow');
    });

    $(".projects-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 'slow');
    });

    $(".contact-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 'slow');
    });

    $(".my-butt").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 'slow');

    });

});
