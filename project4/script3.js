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
            $('.data-container').append('<div class="fl">'+ selectedData.first_light + '</div>');
            $('.data-container').append('<div class="sunrise">' + selectedData.sunrise + '</div>');
            $('.data-container').append('<div class="sunset">' + selectedData.sunset + '</div>');

            var numDates = results.length;
            var dateIndex = results.findIndex(function(result) {
                return result.date === selectedDate;
            });
            var leftPosition = (dateIndex / (numDates - 1)) * 65;
            $('.date').css({ 'left': leftPosition + 'vw' });

            var lightLeft = $('.date').position().left; // Get left position of date element
            $('.light1').css('left', (lightLeft * 1.3) + 'px'); // Set left position of light element


            $(window).scroll(function() {
                var scrollPosition = $(window).scrollTop();
                console.log('Scroll position:', scrollPosition);
                // var sunElement = $('.sun');

                if (scrollPosition >= 500) {
                    $(".fl").css('animation', 'none');
                    $('.fl').animate({
                        'top': '-10vw',
                    },3000);

                    $(".light1").css('animation', 'none');
                    $('.light1').animate({
                        'opacity': '0',
                    },3000);

                    $("#l1").css('animation', 'none');
                    $('#l1').animate({
                        'width': '0',
                    },3000);

                    $("#l3").css('animation', 'none');
                    $('#l3').animate({
                        'width': '0',
                    },3000);


                    $("#l4").css('animation', 'none');
                    $('#l4').animate({
                        'width': '0',
                    },3000);



                    // $(".sun").addClass('colorChange').animate({
                    //     'bottom': '20vw',
                    //     'left': '50vw',
                    // }, 7000);
                    

                    // $(".sun").animate({
                    //     'bottom': '20vw',
                    //     'left':'50vw',
                    // },7000, function() {

                    // $('.sun').addClass('colorChange');
                    // });

                    $(".sun").animate({
                        'bottom': '30vw',
                        'left':'50vw',
                    }, {
                        duration: 7000,
                        progress: function() {
                            setTimeout(function() {
                                $('.sun').addClass('colorChange');
                            }, 5000); // Delay of 2000 milliseconds (2 seconds)
                            

                            // $('.bg1').addClass('bgChange1');

                            $('.bg2').addClass('bgChange1');

                            $('.sunrise').animate({
                                'top':'0vw'
                            },3000)

                            $('#l2').animate({
                                'width':'25vw'
                            },3000)

                        },
                        complete: function() {

                        }
                    });
                    

                    // sunElement.fadeIn();
                    // $('body').html('<div class="sun"></div>')
                }
            });

        } else {
            $('.data-container').html('<p>Error: Data not found for selected date.</p>');
        }

    }).fail(function() {
        $('.data-container').html('<p>Error: Unable to load JSON data.</p>');
    });
});


    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 500) {
    //         $('body').removeClass('bg-color-1').addClass('bg-color-2');
    //     } else {
    //         $('body').removeClass('bg-color-2').addClass('bg-color-1');
    //     }
    // });


    // $(document).scroll(function() {
    //     var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
    //     var channel = Math.round(alpha * 255);
    //     $("body").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
    //     $("body").css('background-color', 'rgb(255,255,255)');
    // });
