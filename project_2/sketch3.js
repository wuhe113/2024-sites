let raindropX = [];
let raindropY = [];
let raindropSpeed = [];
let raindropLength = [];

let rnaPointsX = [];
let rnaPointsY = [];

let numRnaPoints;


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

   push();
    if (windowWidth > 2000) {
        wave(270, 605, -200, 600);  
    } else{
        wave(300, 500, 100, 300);  
    }
    pop();

    rna();
  }

  function raindrops(){

    push();

    if (windowWidth > 2000) {
        translate(-130, 0, 0);
    } else{
        translate(-60, 0, 0);
    }
    



for (let i = 0; i < raindropX.length; i++) {


  stroke(46, 119, 209, 100);
  if (windowWidth > 2000) {
  strokeWeight(10);
  } else{
    strokeWeight(5);
  }

  line(raindropX[i], raindropY[i], raindropX[i], raindropY[i] + raindropLength[i]);
  

  raindropY[i] += raindropSpeed[i];
  

  if (raindropY[i] > height) {

      if (windowWidth > 2000) {
        raindropY[i] = random(-500, -100);
      } else {
        raindropY[i] = random(-200, -100);
      }

    raindropX[i] = random(width);
  }
}
pop();
  }

  function wave(startX, endX, startY, endY){
    push();

    if (windowWidth > 2000) {
        translate(-450, 150, 0);
    }else{
        translate(-400, -90, 0);
    }

    

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

    push();

    if (windowWidth > 2000) {
        translate(-250, -100, 0);
    } else {
        translate(-120, -30, 0);
    }

    let rnaLevel;
    let rnaScale = 0.002;
    let rx, ry, rz;

    if (windowWidth > 2000) {
        rnaLevel = 600;
        numRnaPoints = 500; // Update global numRnaPoints
    } else {
        rnaLevel = 250;
        numRnaPoints = 100; // Update global numRnaPoints
    }

    for (let i = 0; i < numRnaPoints; i++) {
        let rt = rnaScale * frameCount + i * 100;
        rx = rnaLevel * noise(rt);
        ry = rnaLevel * noise(rt + 10000);
        rz = 0;

        stroke(223, 234, 245);
        if (windowWidth > 2000) {
            strokeWeight(3);
        } else {
            strokeWeight(2);
        }
    
        point(rx, ry, rz);
    }

    
    pop();
}





  function windowResized() {
    resizeCanvas(windowWidth / 8.6, windowHeight / 2);
  }