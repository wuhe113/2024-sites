let raindropX = [];
let raindropY = [];
let raindropSpeed = [];
let raindropLength = [];

let rnaPointsX = [];
let rnaPointsY = [];

let tonPointsX = [];
let tonPointsY = [];

let numRnaPoints;
let numTonPoints;

let colors = [];

let planktonActive = false;
let starFloatActive = false;




function setup() {
    let myCanvas3 = createCanvas(windowWidth / 8.6, windowHeight / 2, WEBGL);
    myCanvas3.parent("rainDrops");
    
    

  let button = createButton('┼');
    button.parent("button1");
    button.position(width / 12.5, height / 42);

    button.mousePressed(() => {
        planktonActive = true;
        starFloatActive = true;
    });








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

    for (let i = 0; i < numTonPoints; i++) {
      tonPointsX[i] = random(-width / 2, width / 2);
      tonPointsY[i] = random(-height / 2, height / 2);

      colors.push({
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
        a: random(0, 100)
      });
      
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

    // plankton();

    // starFloat();

    if (planktonActive) {
      plankton();
  }

  if (starFloatActive) {
      starFloat();
  }


    // rectFloat();
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
        numRnaPoints = 500;
    } else {
        rnaLevel = 250;
        numRnaPoints = 100;
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


function plankton(){
  push();

  if (windowWidth > 2000) {
      translate(-250, -100, 0);
  } else {
      translate(-120, -30, 0);
  }

  let tonLevel;
  let tonScale = 0.002;
  let tx, ty, tz;




  if (windowWidth > 2000) {
      tonLevel = 600;
      numTonPoints = 50;
  } else {
      tonLevel = 250;
      numTonPoints = 100;
  }

  if (colors.length < numTonPoints) {
    for (let i = colors.length; i < numTonPoints; i++) {
      colors.push({
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
        a: random(0, 100)
      });
    }
  }



  for (let i = 0; i < numTonPoints; i++) {
      let rt = tonScale * frameCount + i * 100;
      tx = tonLevel * noise(rt);
      ty = tonLevel * noise(rt + 10000);
      tz = 0;

      let r = colors[i].r;
      let g = colors[i].g;
      let b = colors[i].b;
      let a = colors[i].a;
      


      // noFill();

      // noStroke();

      fill(255, 255, 255, 20)

      stroke(223, 234, 245, 50);

      if (windowWidth > 2000) {
        
        ellipse(tx, ty, 60, 30);
          // strokeWeight(3);
        fill(r, g, b, a)
        ellipse(tx, ty, 30, 15);
      } else {
        ellipse(tx, ty, 20, 10);

        fill(r, g, b, a)
        ellipse(tx, ty, 10, 5);
      }
  
      // point(tx, ty, tz);
  }
  pop();

}

function starFloat(){
  push();

  if (windowWidth > 2000) {
      translate(-200, -50, 0);
  } else {
      translate(-180, -60, 0);
  }

  let starLevel;
  let starScale = 0.002;
  let sx, sy, sz;




  if (windowWidth > 2000) {
      starLevel = 350;
      numStarPoints = 50;
  } else {
      starLevel = 350;
      numStarPoints = 30;
  }


  if (colors.length < numTonPoints) {
    for (let i = colors.length; i < numTonPoints; i++) {
      colors.push({
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
        a: random(0, 100)
      });
    }
  }



  for (let i = 0; i < numStarPoints; i++) {
      let rt = starScale * frameCount + i * 100;
      sx = starLevel * noise(rt);
      sy = starLevel * noise(rt + 10000);
      sz = 0;


      let r = colors[i].r;
      let g = colors[i].g;
      let b = colors[i].b;
      let a = colors[i].a;
      
      


      // noFill();

      noStroke();

      fill(r, g, b, 100)

      // stroke(223, 234, 245, 50);

      if (windowWidth > 2000) {
        star(sx, sy, 5, 20, 10);

      } else {
        star(sx, sy, 4, 10, 10);
      }
  }
  pop();

}



// I found the following code snippet on https://editor.p5js.org/aferriss/sketches/BJnHtrpnz
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}





  function windowResized() {
    resizeCanvas(windowWidth / 8.6, windowHeight / 2);
  }


  // function rectFloat(){
//   push();

//   if (windowWidth > 2000) {
//       translate(-250, -100, 0);
//   } else {
//       translate(-200, 100, 0);
//   }

//   let rectLevel;
//   let rectScale = 0.002;
//   let rex, rey, rez;





//   if (windowWidth > 2000) {
//       rectLevel = 600;
//       numRectPoints = 50;
//   } else {
//       rectLevel = 100;
//       numRectPoints = 10;
//   }



//   for (let i = 0; i < numRectPoints; i++) {
//       let rt = rectScale * frameCount + i * 100;
//       rex = rectLevel * noise(rt);
//       rey = rectLevel * noise(rt + 10000);
//       rez = 0;


      


//       // noFill();

//       noStroke();

//       fill(255, 255, 255, 100)

//       angleMode(DEGREES);
//       rotate(-5);

//       // stroke(223, 234, 245, 50);

//       if (windowWidth > 2000) {
//         rect(rex, rey, 55, 40);

//       } else {
//         rect(rex, rey, 2, 15);
//       }
//   }
//   pop();

// }