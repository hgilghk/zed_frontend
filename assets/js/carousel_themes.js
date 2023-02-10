$(document).ready(function() {

    // Change carousel indecators active
    $(".dot").on("click", function() {
        $(".dot").removeClass("active");
        $(this).addClass("active");
    });

    // change carousel slide by swip
    // $('.carousel').on('touchstart', function(event){
    //     const xClick = event.originalEvent.touches[0].pageX;
    //     $(this).one('touchmove', function(event){
    //         const xMove = event.originalEvent.touches[0].pageX;
    //         const sensitivityInPx = 5;
    
    //         if( Math.floor(xClick - xMove) > sensitivityInPx ){
    //             $(this).carousel('prev');
    //         }
    //         else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
    //             $(this).carousel('next');
    //         }
    //     });
    //     $(this).on('touchend', function(){
    //         $(this).off('touchmove');
    //     });
    // });
 });