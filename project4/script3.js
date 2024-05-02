$(document).ready(function() {

    var urlParams = new URLSearchParams(window.location.search);
    var selectedDate = urlParams.get('date');
    

    $.getJSON('data.json', function(data) {
        var results = data.results;


        var selectedData = results.find(function(result) {
            return result.date === selectedDate;
        });


        if (selectedData) {

            $('.data-container').html('');
            $('.data-container').append('<div class="date">' + selectedData.date + '</div>');
            $('.data-container').append('<div class="fl">' + selectedData.first_light + '</div>');
            $('.data-container').append('<div class="sunrise">' + selectedData.sunrise + '</div>');
            $('.data-container').append('<div class="sunset">' + selectedData.sunset + '</div>');

        } else {
            $('.data-container').html('<p>Error: Data not found for selected date.</p>');
        }
    }).fail(function() {
        $('.data-container').html('<p>Error: Unable to load JSON data.</p>');
    });

    // $(document).scroll(function() {
    //     var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
    //     var channel = Math.round(alpha * 255);
    //     $("body").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
    //     $("body").css('background-color', 'rgb(255,255,255)');
    // });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) { // Adjust this value according to when you want the background color to change
          $('body').removeClass('bg-color-1').addClass('bg-color-2');
        } else {
          $('body').removeClass('bg-color-2').addClass('bg-color-1');
        }
      });
});
