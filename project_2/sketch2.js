let r = [];
let g = [];
let b = [];



let raindropX = [];
let raindropY = [];
let raindropSpeed = [];
let raindropLength = [];

function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("rainDrops")
  
  
  for (let i = 0; i < 100; i++) {
    raindropX[i] = random(width); 
    raindropY[i] = random(-500, -50); 
    raindropSpeed[i] = random(2, 5);     
    raindropLength[i] = random(10, 20); 
    
    
    // let colorChoice = int(random(3));
    // if (colorChoice === 0) {
    //   r[i] = 255;
    //   g[i] = 0;
    //   b[i] = 0;
    // } else if (colorChoice === 1) {
    //   r[i] = 0;
    //   g[i] = 255;
    //   b[i] = 0;
    // } else {
    //   r[i] = 0;
    //   g[i] = 0;
    //   b[i] = 255;
    // }
  
  }

}

function draw() {
  background(0); 

  let rainMove = map(mouseX, 0, width, -1, 1);
  
  for (let i = 0; i < raindropX.length; i++) {

    stroke(r[i], g[i], b[i]);
    strokeWeight(2);
    line(raindropX[i], raindropY[i], raindropX[i], raindropY[i] + raindropLength[i]);
    

    raindropY[i] += raindropSpeed[i];
    raindropX[i] += rainMove;
    

    if (raindropY[i] > height) {
      raindropY[i] = random(-200, -100);
      raindropX[i] = random(width);
    }
  }
}
