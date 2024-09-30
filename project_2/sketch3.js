let raindropX = [];
let raindropY = [];
let raindropSpeed = [];
let raindropLength = [];

let rnaPointsX = [];
let rnaPointsY = [];
let numRnaPoints = 100;


function setup() {
    

    let myCanvas3 = createCanvas(windowWidth / 8.6, windowHeight / 2, WEBGL);
    myCanvas3.parent("rainDrops")

    for (let i = 0; i < 100; i++) {
      raindropX[i] = random(width); 
      raindropY[i] = random(-500, -50); 
      raindropSpeed[i] = random(2, 5);     
      raindropLength[i] = random(10, 20);
    }

    for (let i = 0; i < numRnaPoints; i++) {
        rnaPointsX[i] = random(-width / 2, width / 2);
        rnaPointsY[i] = random(-height / 2, height / 2);
    }



  }

  function draw() {
    background(0,0,0,0);

    raindrops();

    wave(300, 500, 100, 300);  

    rna();
  }

  function raindrops(){

    push();

    translate(-60, 0, 0);
    



for (let i = 0; i < raindropX.length; i++) {


  stroke(46, 119, 209, 100);
  strokeWeight(5);
  line(raindropX[i], raindropY[i], raindropX[i], raindropY[i] + raindropLength[i]);
  

  raindropY[i] += raindropSpeed[i];
  

  if (raindropY[i] > height) {
    raindropY[i] = random(-200, -100);
    raindropX[i] = random(width);
  }
}
pop();
  }

  function wave(startX, endX, startY, endY){
    push();

    translate(-400, -90, 0);

    

    let noiseLevel = -100;
    let noiseScale = 0.002;

    stroke(36, 127, 212);


    for (let x = startX; x < endX; x += 1){


        let nx = noiseScale * x;
        let nt = noiseScale * frameCount;

        let y  = noiseLevel * noise(nx,nt);
        
        line(x,startX,x,startY + y);
    }
    pop();
  }

  function rna(){

    translate(-120, -30, 0);

    let rnaLevel = 250;
    let rnaScale = 0.002;

    for (let i = 0; i < numRnaPoints; i++) {
        
        let rt = rnaScale * frameCount + i * 100;

    let rx = rnaLevel * noise(rt);
    let ry = rnaLevel * noise (rt + 10000);
    let rz = 0;

   stroke(223, 234, 245);
   strokeWeight(2);
   point(rx, ry, rz);
    }
    

  }



  function windowResized() {
    resizeCanvas(windowWidth / 8.5, windowHeight / 2);
  }