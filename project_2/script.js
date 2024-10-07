// $("document").ready(function(){
//     $("#title").draggable();


// })

let startButton = document.getElementById("button2");
let hidden = document.getElementById("cover");

startButton.onclick = function(e) {
    hidden.style.visibility = "hidden";
    document.body.style.overflow = "scroll";

    window.scrollTo(0, 0);

    showDiv();
};

function showDiv() {
    let div = document.getElementById("content");
    div.classList.add("visible");
};


let timesHeader = document.getElementById("headLine");


window.onscroll = function(e){
    if (window.scrollY > 0) {
        timesHeader.style.top = "-5%";
    } else {
        timesHeader.style.top = "0";
    }
};

// timesHeader.scroll({
//     top: 100,
//     left: 100,
//     behavior: "smooth",
//   });
  
