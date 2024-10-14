let l1 = document.getElementById("line1");
let l2 = document.getElementById("line2");

document.onmousemove = function(e){
    l1.style.top = e.clientY + "px";
    l2.style.left = e.clientX + "px";

    // cursor.style.left = e.clientX + "px";
    // cursor.style.top = e.clientY + "px";



}