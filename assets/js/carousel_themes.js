var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
var themeHent = document.querySelectorAll(".themes .theme-hent")[0];
var themeDesc = document.querySelectorAll(".themes .theme-desc")[0];
var cDir = true;

if (lang == "En") {
    cDir = false;
} else if (lang == "ar") {
    cDir = true;
} 

$(document).ready(function() {

    $('#carousel-themes').owlCarousel({
        loop:true,
        margin:10,
        rtl: cDir,
        responsive:{
            0:{
                items:1
            }
        }
    });

    getActiveSlideIndex = function (event) {
        if (!event.item) {
            return null;
        }

        var count  = event.item.count,
            offset = Math.floor((count + 1) / 2),
            index  = event.item.index;

        if (index > 0) {
            index -= offset;
        }
        if (index >= count) {
            index -= count;
        }
        if (index < 0) {
            index = count - 1;
        }
        if (count === 2) {
            index = index === 0 ? 1 : 0;
        }

        var n = 0;

        if (document.querySelectorAll(".owl-item").length < 8) {
            n = 2;
        } else {
            n = document.querySelectorAll(".owl-item").length / 4;
        }
        
        // can't use float number this is why I used ceil
        var newIndex = index + Math.ceil( n );
        themeHent.textContent = event.target.getElementsByClassName("owl-item")[newIndex].children[0].children[1].textContent;
        themeDesc.textContent = event.target.getElementsByClassName("owl-item")[newIndex].children[0].children[2].textContent;
    }
    
    // When carousel change
    $('#carousel-themes').on("changed.owl.carousel", getActiveSlideIndex);


});