const animationDuration = 1000;
const animateLeft = {left: 0, opacity: 0.9};
const animateRight = {right: 0, opacity: 0.9};
const animateTop = {top: 0, opacity: 0.9};
const animateBottom = {bottom: 0, opacity: 0.9};
const dimention = 200;

// header animation
var header = "#header",
    hFadeInBottom = $(header + " .fade-in-bottom"),
    hFadeInRight = $(header + " .fade-in-right"),
    hFadeInLeft = $(header + " .fade-in-left"),
    hFadeInTop = $(header + " .fade-in-top");

    hFadeInLeft.animate(animateLeft, animationDuration);
    hFadeInRight.animate(animateRight, animationDuration);
    hFadeInTop.animate({top: 0, opacity: 1}, animationDuration);
    hFadeInBottom.animate({bottom: 0, opacity: 1}, animationDuration);

$(window).scroll(function() {
    
    var winScroll = $(this).scrollTop();


    // about us animation
    var aboutUs = "#dev",
        aboutFadeInRight = $(aboutUs + " .fade-in-right"),
        aboutFadeInLeft  = $(aboutUs + " .fade-in-left"),
        aboutFadeInBottom = $(aboutUs + " .fade-in-bottom");
    
    if (winScroll >= $(aboutUs).offset().top - dimention) {
        aboutFadeInRight.animate(animateRight, animationDuration);
        aboutFadeInLeft.animate(animateLeft, animationDuration);
        aboutFadeInBottom.animate(animateBottom, animationDuration);
    }

    // analy us animation
    var analy = "#analy",
        aboutFadeInRight = $(analy + " .fade-in-right"),
        aboutFadeInLeft  = $(analy + " .fade-in-left"),
        aboutFadeInBottom = $(analy + " .fade-in-bottom");
    
    if (winScroll >= $(analy).offset().top - dimention) {
        aboutFadeInRight.animate(animateRight, animationDuration);
        aboutFadeInLeft.animate(animateLeft, animationDuration);
        aboutFadeInBottom.animate(animateBottom, animationDuration);
    }

    // analy us animation
    var success = "#success",
        aboutFadeInRight = $(success + " .fade-in-right"),
        aboutFadeInLeft  = $(success + " .fade-in-left"),
        aboutFadeInBottom = $(success + " .fade-in-bottom");
    
    if (winScroll >= $(success).offset().top - dimention) {
        aboutFadeInRight.animate(animateRight, animationDuration);
        aboutFadeInLeft.animate(animateLeft, animationDuration);
        aboutFadeInBottom.animate(animateBottom, animationDuration);
    }
})