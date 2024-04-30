$(document).ready(function(){


    $.getJSON("data.json", function(data){
        console.log(data); // Log the retrieved data to the console
        var newhtml = "";
        for (let i = 0; i < data.results.length; i++){
            newhtml += `<div class="date">${data.results[i].date}</div>`; 
        }
        $(".content").html(newhtml);
    });

    // $.getJSON("data.json", function(data){
    //     console.log(data); // Log the retrieved data to the console
    // });





    $(window).scroll(function(){
        var scrollPosition = window.scrollY;
        var centerX = $(window).width() / 2;
        var centerY = $(window).height() / 2;
        var angle = -scrollPosition / 180; // negative sign for anticlockwise rotation

        // Use translate to move the origin to the center of the div
        var transformValue = 'translate(' + centerX + 'px, ' + centerY + 'px) rotate(' + angle + 'deg) translate(-' + centerX + 'px, -' + centerY + 'px)';

        $(".content").css({
            transform: transformValue
        });
    });
});
