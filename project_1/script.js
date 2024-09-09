// Acknowledgment: ChatGPT provided insights and helped debug this code

function getRandomLetter(){
    const lettersArray = "QWERTYUIOPASDFGHJKLZXCVBNM";

    return lettersArray[Math.floor(Math.random()*lettersArray.length)];

}

function addElement(){
    for (let i = 0; i < 500; i++) {

    let gridDiv = document.getElementById("grid");
    let newDiv = document.createElement("div");
    // let translate = Math.random()*20;

    newDiv.classList.add("letter");

    let letterSpan = document.createElement("span");
        let newContent = document.createTextNode(getRandomLetter());

        letterSpan.appendChild(newContent);
        newDiv.appendChild(letterSpan);


    // newDiv.style.transform = `translate(${translate}px, ${translate}px)`;

    gridDiv.appendChild(newDiv);
    }


    for (let i = 0; i < 20; i++) {

        let starGird1 = document.getElementById("starBorder1");
        let starGird2 = document.getElementById("starBorder2");
        let starDiv1 = document.createElement("div");
        let starDiv2 = document.createElement("div");

        starDiv1.classList.add("star");
        starDiv2.classList.add("star");

        let starContent1 = document.createTextNode("★");
        let starContent2 = document.createTextNode("★");

        starDiv1.appendChild(starContent1);
        starDiv2.appendChild(starContent2);

        starGird1.appendChild(starDiv1);
        starGird2.appendChild(starDiv2);

    }

    // for (let i = 0; i < 2; i++) {

    //     let arrowDiv = document.getElementById("arrow");
    //     let aDiv = document.createElement("div");
    
    //     aDiv.classList.add("arrowLi");
    
    //     let arrowContent = document.createTextNode("⬸");

    //         aDiv.appendChild(arrowContent);
    
    
    
    //     arrowDiv.appendChild(aDiv);
    //     }



}


document.addEventListener('mousemove', function(event) {
    let starRotate = document.getElementById("starTitle");
    if (starRotate) { 
        const screenHeight = window.innerHeight;
        const mouseY = event.clientY;
        const rotationDegree = ((mouseY / screenHeight) * 90) - 45;
        starRotate.style.transform = `rotate(${rotationDegree}deg)`;
    }
});

$(document).ready(function () {
    addElement();

    $("#grid").on('click', 'span:contains("H")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("H")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("E")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("e")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("L")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("l")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("N")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("n")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("W")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("W")').css({
            'visibility':'visible'
        });
    });


    $("#grid").on('click', 'span:contains("U")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("u")').css({
            'visibility':'visible'
        });
    });


    $("#grid").on('click', 'span:contains("I")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("i")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("O")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("o")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("R")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("r")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("C")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("c")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("D")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("d")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("T")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("t")').css({
            'visibility':'visible'
        });
    });

    $("#grid").on('click', 'span:contains("A")', function () {
        $(this).css({
            'border': '1px solid black',
            'border-radius': '50%',
            'padding': '5px'
        });
        $('strong:contains("a")').css({
            'visibility':'visible'
        });
    });

    $('#d2').mousedown(function(){
        $(this).css({
            'bottom': '20px',
            'transform': 'skew(0deg, 10deg)'
        });

        $('#doorknob').css({
            'bottom': '70px'

        });
    });

    $('#d2').mouseleave(function(){
        $(this).css({
            'bottom': '40px',
            'transform': 'skew(0deg, -10deg)'
        });

        $('#doorknob').css({
            'bottom': '100px'

        });
    });

});






// document.addEventListener('mousemove', function(event) {
//     const stars = document.querySelectorAll('.star'); // Select all stars
//     stars.forEach(starDiv => {
//         const position = starDiv.getBoundingClientRect();
//         const x = event.clientX - (position.x + position.width / 2);
//         const y = event.clientY - (position.y + position.height / 2);
//         const degrees = Math.atan2(y, x) * (180 / Math.PI) + 90; // Adjust rotation angle
//         starDiv.style.transform = `rotate(${degrees}deg)`;
//     });
// });


// const colors = [
//     "rgb(37, 37, 37)",
//     "rgb(45, 154, 253)",
//     "rgb(255, 251, 0)",
// ];

// let index = 0;

// function changeColor() {
//     let textChange = document.getElementById("title2");

//     textChange.style.transition = "background 2s ease";
//     textChange.style.color = colors[index];
    
//     index = (index + 1) % colors.length;
// }

// setInterval(changeColor, 5000);






window.onload = addElement;


