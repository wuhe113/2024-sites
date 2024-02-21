// window.addEventListener("load", (event) => {
//   new cursoreffects.ghostCursor();
// });


$("document").ready(function(){

  // var soundClick = document.getElementById("music1");

  $("#play1").click(function(){
    $("audio#music1")[0].play();
    $("#play1").css({
      "visibility":"hidden",
    });
    $("#pause1").css({
      "visibility":"visible",
    });
    $("#st1").css({
      "visibility":"visible",
    });
  });


  $("#pause1").click(function(){
    $("audio#music1")[0].pause();
    $("#play1").css({
      "visibility":"visible",
    });
    $("#pause1").css({
      "visibility":"hidden",
    })
    $("#st1").css({
      "visibility":"hidden",
    });

  });

  $("#play2").click(function(){
    $("audio#music2")[0].play();
    $("#play2").css({
      "visibility":"hidden",
    });
    $("#pause2").css({
      "visibility":"visible",
    });
    $("#st2").css({
      "visibility":"visible",
    });
  });

  $("#pause2").click(function(){
    $("audio#music2")[0].pause();
    $("#play2").css({
      "visibility":"visible",
    });
    $("#pause2").css({
      "visibility":"hidden",
    })
    $("#st2").css({
      "visibility":"hidden",
    });

  });


  var audioPlayers = document.getElementsByClassName("audioPlayer");
  var volume = 50;

  $("#volumeSlider").on('input', function() {
    volume = $(this).val();

for (var i = 0; i < audioPlayers.length; i++) {
  audioPlayers[i].volume = volume / 100;
}
$("#volumeSlider").val(volume);
});

  
    // $(".volume").slider();

    
    // function musicTime(){
    //   var audio = document.getElementById("music1")
    //   var timeCount = Math.floor(audio.currenTime)
    //   var minutes = parseInt(audio.duration / 60);
    //   var seconds = parseInt(audio.duration % 60);
    //   var timeMinute = Math.floor(timeCount / 60);
    //   var timeDisplay = Math.floor(audio.currenTime % 60);
    //   var secondsTime = timeDisplay < 10 ? '0' + timeDisplay : timeDisplay
    //   $("#time1").html( timeMinute + ':' + secondsTime + '/' + minutes + ":" + seconds);
    // }

    // audio.ondurationchange = function() {
    //   musicTime();
    // }
  




  $(".hours").draggable();

});


