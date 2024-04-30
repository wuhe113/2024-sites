$(document).ready(function(){



    $.getJSON("data.json", function(pup){
        var newhtml = ""

        for (let i = 0; i < data.length; i++){
            newhtml = newhtml + `<div class="date">"${data[i].date}">` 
        }

        console.log(newhtml)
        $(".data-date").html( newhtml )
    });





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
