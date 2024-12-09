function applyStoredBackgroundColor() {
    const storedColor = localStorage.getItem("backgroundColor");
    // const storedColor2 = localStorage.getItem("backgroundColor3");
    const storedBorder = localStorage.getItem("border3");
    const storedBorder2 = localStorage.getItem("border");
    const storedColor2 = localStorage.getItem("color2");
    const storedColor3 = localStorage.getItem("color");
    const about = document.getElementById("about");
    const back = document.getElementById("back");


    if (storedColor == "rgb(124, 98, 60)") {
        document.body.style.backgroundColor = storedColor;
        document.body.style.color = storedColor3;
        about.style.border = storedBorder2;
        back.style.border = storedBorder2;

        console.log(`Background color set to ${storedColor}`);
    } else {
        console.log("No background color found in storage.");
    }

    if (storedColor == "white") {
        document.body.style.backgroundColor = storedColor;
        document.body.style.color = storedColor2;
        about.style.border = storedBorder;
        back.style.border = storedBorder;

        console.log(`Background color set to ${storedColor}`);
    } else {
        console.log("No background color found in storage.");
    }
}

document.addEventListener("DOMContentLoaded", applyStoredBackgroundColor);

