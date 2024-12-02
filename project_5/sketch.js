//study from https://www.youtube.com/watch?v=cl-mHFCGzYk

let starFall = [];
let gravity;


function setup(){
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("stars");

    gravity = createVector(0, 0.01);

}

function draw(){
    background(255,255,255);

    starFall.push(new stars());


    for (Star of starFall){
        Star.update();
        Star.render();
    }
}

