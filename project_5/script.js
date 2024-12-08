function applyStoredBackgroundColor() {
    const storedColor = localStorage.getItem("backgroundColor");


    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
        console.log(`Background color set to ${storedColor}`);
    } else {
        console.log("No background color found in storage.");
    }
}

document.addEventListener("DOMContentLoaded", applyStoredBackgroundColor);

