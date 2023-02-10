$(document).ready(function() {
    // Variables
    const showSidbarBtn = document.getElementById("open-mobile-side-panel");
    const sidbarOverlay = document.getElementById("mobile-side-panel-overlay");
    const mobileSidbar  = document.getElementById("mobile-sidebar");
    const closeSidbar   = mobileSidbar.childNodes[1];
    // const contactBtn   = document.querySelector("#mobile-panel-btn");
    const navbarList   = document.querySelector("#mobile-panel-navbar");
    var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
    
    function viewSidebar() {
        sidbarOverlay.style.opacity = "0.8";
        sidbarOverlay.style.visibility = "visible";
        if (lang == "ar") {
            mobileSidbar.style.right = "0";
            mobileSidbar.style.opacity = "1";
        } else {
            mobileSidbar.style.left = "0";
            mobileSidbar.style.opacity = "1";
        }
    };

    function HideSidebar() {
        sidbarOverlay.style.opacity = "0";
        sidbarOverlay.style.visibility = "hidden";
        if (lang == "ar") {
            mobileSidbar.style.right = "-22rem";
            mobileSidbar.style.opacity = "0";
        } else {
            mobileSidbar.style.left = "-22rem";
            mobileSidbar.style.opacity = "0";
        }
    };

    showSidbarBtn.onclick = () => {
        viewSidebar();
    };

    sidbarOverlay.onclick = () => {
        HideSidebar();
    };

    closeSidbar.onclick = () => {
        HideSidebar();
    };

    // contactBtn.onclick = () => {
    //     HideSidebar();
    // }

    navbarList.onclick = () => {
        HideSidebar();
    }
});