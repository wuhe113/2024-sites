let l1 = document.getElementById("line1");
let l2 = document.getElementById("line2");

document.onmousemove = function(e){
    l1.style.top = e.clientY + "px";
    l2.style.left = e.clientX + "px";

    // cursor.style.left = e.clientX + "px";
    // cursor.style.top = e.clientY + "px";



}

const glitchOverlay = document.getElementById('glitch-overlay');

function triggerGlitch() {
    glitchOverlay.classList.add('glitch-active');
    document.body.style.color = ('black');


    setTimeout(() => {
        glitchOverlay.classList.remove('glitch-active');
        document.body.style.color = ('red');
    }, 200);
}

setInterval(triggerGlitch, 5000);
