var mic;
let change1 = document.getElementById("c1");
let change2 = document.getElementById("s1")
let change3 = document.getElementById("c2")
let change4 = document.getElementById("r1")
let change5 = document.getElementById("s2")

function setup(){
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
    mic.start();
}

function draw(){
    background(0);

    var vol = mic.getLevel();

    change1.style.width = (vol*200) + 10 +'vw';
    change1.style.height = (vol*200) + 10 +'vw';

    change2.style.width = (vol*200) + 10 +'vw';
    change2.style.height = (vol*200) + 10 +'vw';

    change3.style.width = vol*1000 +'vw';
    change3.style.height = vol*1000 +'vw';


    change4.style.width = vol*4000 +'vw';

    change5.style.width = vol*800 +'vw';
    change5.style.height = vol*300 +'vw';

    let numLines = int(vol * vol * 500);
    for (let i = 0; i < numLines; i++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);
        stroke(255);
        strokeWeight(2);
        line(x1, y1, x2, y2);
    }



}
