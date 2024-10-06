// $("document").ready(function(){
//     $("#title").draggable();


// })

let startButton = document.getElementById("button2");
let hidden = document.getElementById("cover");

startButton.onclick = function(e) {
    hidden.style.visibility = 'hidden';

    showDiv();
};

function showDiv() {
    let div = document.getElementById("content");
    div.classList.add("visible");
}
