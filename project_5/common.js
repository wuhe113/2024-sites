function changeColor(){
    const color1 = document.getElementById("m3");
    const color2 = document.getElementById("m2");
    const color3 = document.getElementById("m1");

    const b1 = document.getElementById("cate");
    const b2 = document.getElementById("home");
    const b3 = document.getElementById("addItem");
    const b4 = document.getElementById("about");
    const b5 = document.getElementById("cart");
    const b6 = document.getElementById("mode");
    const b7 = document.getElementById("scroll-to-top");

    const itemBack1 = document.querySelectorAll(".item");
    const itemBack2 = document.querySelectorAll(".itemShadow");

    const image = document.getElementById("tree");
    const imageBack = document.getElementById("layer");

    const code = document.getElementById("top");

    color2.onclick = function(e){
        // document.body.style.backgroundColor = "black";
        document.body.style.setProperty('background-color', 'black', 'important');

        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "black";
        b7.style.backgroundColor = "black";
        code.style.backgroundColor = "black";

        image.style.filter = "grayscale(100%)";
        imageBack.style.backgroundColor = "black";

        for(let itemBack1each of itemBack1){
            itemBack1each.style.backgroundColor = "rgb(15, 15, 15)";
            itemBack1each.style.boxShadow = "3px 3px 5px 0px rgb(50, 50, 50)";
        }


        for(let itemBack2each of itemBack2){
            itemBack2each.style.backgroundColor = "rgb(15, 15, 15)";
        }

        color2.style.border = "1px solid white";
        color2.style.width = "15px";
        color2.style.height = "15px";

        color1.style.border = "0px solid rgb(81, 64, 39)";
        color1.style.width = "10px";
        color1.style.height = "10px";

        color3.style.border = "0px solid white";
        color3.style.width = "10px";
        color3.style.height = "10px";
    }
};

console.log("common.js is loaded");

// if (document.body.id === "aboutPage") {
//     changeColor();
// }