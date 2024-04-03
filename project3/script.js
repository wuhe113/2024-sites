$(document).ready(function(){

    // var enlargeSize = 5;
    var currentSize = 45;
    // var up = 50;

    $('#colorPicker').on('input', function() {
        var color = $(this).val();
        $('body').css('background-color', color);
    });

    $('#colorPicker2').on('input', function() {
        var color = $(this).val();
        $('body').css('background-color', color);
    });

    function changeAgentContent() {
        document.getElementById("inputImageAgent").value = document.getElementById("imageInput").value;
    }

    $('#imageInput').change(function(e) {
        var file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var imageData = e.target.result;
                $('#imagePreview1').css('background-image', 'url(' + imageData + ')');
                $('#imagePreview1').show();
                $('#imagePreview2').css('background-image', 'url(' + imageData + ')');
                $('#imagePreview2').show();
            };

            reader.readAsDataURL(file);
        }
    });


            // $('#enlargeButton').click(function() {
            //     enlargeSize += 5;
            //     $('.image-preview').css('background-size', enlargeSize + 47 + 'vw')
            // });


            // $('#shrinkButton').click(function() {
            //     var currentSize = parseFloat($('.image-preview').css('background-size'));
            //     var newSize = currentSize - 5;
            //     $('.image-preview').css('background-size', newSize + 'vw');
            // });

            $('#enlargeButton').click(function() {
                currentSize += 5;
                $('.image-preview').css('background-size', currentSize + 'vw');
            });
        
            $('#shrinkButton').click(function() {
                currentSize -= 5;
                $('.image-preview').css('background-size', currentSize + 'vw');
            });


            $('#deleteButton').click(function() {
                $('.image-preview').css('background-image', 'none');
            });

            // $('#upButton').click(function() {
            //     up -=10;
            //     $('.image-preview').css('background-position', up + '%', up + '%');
            // });

            $('#upButton').click(function() {
                $('.image-preview').each(function() {
                    var currentPosition = $(this).css('background-position');
                    var currentX = parseInt(currentPosition.split(' ')[0]);
                    var currentY = parseInt(currentPosition.split(' ')[1]);
                    $(this).css('background-position', currentX + '% ' + (currentY - 5) + '%');
                });
            });

            $('#leftButton').click(function() {
                $('.image-preview').each(function() {
                    var currentPosition = $(this).css('background-position');
                    var currentX = parseFloat(currentPosition.split(' ')[0]);
                    var currentY = parseFloat(currentPosition.split(' ')[1].replace('%', ''));
                    $(this).css('background-position', (currentX + 5) + '% ' + currentY + '%');
                });
            });
            
            $('#rightButton').click(function() {
                $('.image-preview').each(function() {
                    var currentPosition = $(this).css('background-position');
                    var currentX = parseFloat(currentPosition.split(' ')[0]);
                    var currentY = parseFloat(currentPosition.split(' ')[1].replace('%', ''));
                    $(this).css('background-position', (currentX - 5) + '% ' + currentY + '%');
                });
            });

            $('#downButton').click(function() {
                $('.image-preview').each(function() {
                    var currentPosition = $(this).css('background-position');
                    var currentX = parseInt(currentPosition.split(' ')[0]);
                    var currentY = parseInt(currentPosition.split(' ')[1]);
                    $(this).css('background-position', currentX + '% ' + (currentY + 5) + '%');
                });
            });

            $('#on').click(function(){
                $('.image-preview').css('background-repeat', 'repeat');
            })

            $('#off').click(function(){
                $('.image-preview').css('background-repeat', 'no-repeat');
            })

            // $('#upButton').click(function() {
            //     up -=10
            //         $('.image-preview').css('background-position', '0px'  + up + 'px');
            // });

});