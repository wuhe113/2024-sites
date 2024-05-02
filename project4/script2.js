document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }


const colors = [
    "rgb(221, 167, 74)",
    "rgb(45, 154, 253)",
    "rgb(255, 127, 95)",
    "rgb(255, 201, 210)",
    "rgb(89, 149, 194)",
    "rgb(0, 69, 255)",
    "rgb(0, 211, 255)",
    "rgb(0, 111, 212)",
    "rgb(0, 48, 116)",
    "rgb(0, 8, 40)",
    "rgb(255, 61, 40)",
];

let index = 0;

function changeBackgroundColor() {

    const background = document.getElementById('set1');

    console.log(background);

    background.style.transition = "background 2s ease";
    background.style.background = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000);


$(document).ready(function(){

    $.getJSON('data.json', function(data){
        console.log(data);
        var newhtml = "";
        var numCircles = data.results.length;
        var radius = 290;
        var container = $('#circle-container');
        var centerX = container.width() / 2;
        var centerY = container.height() / 2;
        var angleIncrement = (2 * Math.PI) / numCircles;

        for (let i = 0; i < numCircles; i++) {
            var angle = i * angleIncrement;
            var x = centerX + radius * Math.cos(angle);
            var y = centerY + radius * Math.sin(angle);
            newhtml += `<div class="circle" style="left: ${x}px; top: ${y}px;"></div>`;
            newhtml += `<div class="date" style="left: ${x}px; top: ${y}px;">${data.results[i].date}</div>`; 
        }
        $(".content").html(newhtml);

        $('.date').mousemove(function(e) {
            const xOffset = e.clientX - $(this).offset().left;
            const yOffset = e.clientY - $(this).offset().top;

            const xOffsetPercentage = xOffset / $(this).width() * 100;
            const yOffsetPercentage = yOffset / $(this).height() * 100;

            const shadowX = (xOffsetPercentage - 50) * 0.15;
            const shadowY = (yOffsetPercentage - 50) * 0.15;

            $(this).css("text-shadow", `${shadowX}px ${shadowY}px 10px rgba(255, 55, 0)`);
        });

        $('.date').click(function(){

            var clickedDate = $(this).text();

            window.location.href = 'page3.html?date=' + encodeURIComponent(clickedDate);
        });
    });
      

    $(".content").mouseenter(function(){
        $("#invertedcursor").animate({
            width: '40px',
            height: '40px'
        });
    })

    $(".content").mouseleave(function(){
        $("#invertedcursor").animate({
            width: '25px',
            height: '25px'
        });
    })


});
