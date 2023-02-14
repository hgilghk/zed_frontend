var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
var themes_section_title = document.querySelectorAll(".themes .section-desc")[0];
var themes_section_hent = document.querySelectorAll(".themes .section-hent")[0];

if (lang == "ar") {
    var themes_hent = [
        "ثيم مخصص",
        "ثيم مخصص",
        "إشراق"
    ];
    var themes_desc = [
        "تميز متجر قرمز بثيمه الأنيق وأبرز منتجاته بلمسته الخاصة",
        "في عالم العسل لافييت من ابرز العلامات، ومتجره مخصص على ذوقه الخاص من الصفر",
        "متجر بالقلم يميز اقلام عملائه ببصمته الخاصة"
    ];
} else if (lang == "En") {
    var themes_hent = [
        "Elegant Theme",
        "Custom Theme",
        "Shine"
    ];
    var themes_desc = [
        "Qormuz has distinguished by its elegant theme and highlighted its products with its own unique touch",
        "In the world of honey, Lafayette is one of the most prominent brands, and his shop is dedicated to his own style from scratch",
        "A bilqalam a store that distinguishes the pens of its customers with its own mark"
    ];
}

var dot = document.querySelectorAll(".dot");

// Init
function checkCarousel() {
    for (var i = 0; i < $(".themes .dot").length; i++) {
        if (dot[i].classList.contains("active")) {
            themes_section_title.textContent = themes_desc[i];
            themes_section_hent.textContent = themes_hent[i];
        }
    }
}

$(document).ready(function() {

    checkCarousel();

    // Change carousel indecators active
    $(".themes .dot").on("click", function() {
        $(".dot").removeClass("active");
        $(this).addClass("active");
        checkCarousel();
    });

    $("#carousel-themes").on("slid", () => {
        console.log("0");
        checkCarousel();
    })
});