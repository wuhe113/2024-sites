let font;
let points1 = [];
let points2 = [];

let angleOffset = 0;
let growth = 0;
let growthRate = 0.03;


function preload(){
    font = loadFont("assets/ABCFavorit-Medium.woff");
}

function setup(){
    let myCanvas = createCanvas(windowWidth, windowHeight);

    myCanvas.parent("logo");

    frameRate(30);
    points1 = font.textToPoints("THE", 230, 320, 300);
    points2 = font.textToPoints("FACE", 150, 620, 300);
}

function draw(){
    background(255,255,255);

    noStroke();

    fill(255,0,0);

    growth += growthRate;
    
    angleOffset += 0.01;


    for (let i = 0; i < points1.length; i++){
        let radius1 = random(5, 80);
        let radius2 = map(sin(frameCount * 0.05 + i), -1, 1, 15, 60) + random(-5, 5);
        star(points1[i].x, points1[i].y, radius1 - 50, radius2 + growth, 10 + growth / 2); 
    }

    for (let i = 0; i < points2.length; i++){
        let radius1 = random(10, 15);
        let radius2 = map(sin(frameCount * 0.05 + i), -1, 1, 15, 60) + random(-5, 5);
        star(points2[i].x, points2[i].y, radius1, radius2 + growth, 10 + growth / 2); 
    }
}




  function star(x, y, baseRadius1, baseRadius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
    
      let dynamicRadius1 = baseRadius1;
      let dynamicRadius2 = baseRadius2;
    
      let sx = x + cos(a + angleOffset) * dynamicRadius2;
      let sy = y + sin(a + angleOffset) * dynamicRadius2;
      vertex(sx, sy);
    
      sx = x + cos(a + halfAngle + angleOffset) * dynamicRadius1;
      sy = y + sin(a + halfAngle + angleOffset) * dynamicRadius1;
      vertex(sx, sy);
    }
      endShape(CLOSE);
    }