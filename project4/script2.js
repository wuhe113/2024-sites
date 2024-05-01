$(document).ready(function(){

    $.getJSON("data.json", function(data){
        console.log(data);
        var newhtml = "";
        var numCircles = data.results.length;
        var radius = 290; // 调整半径以适应元素的布局
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
    });

});
