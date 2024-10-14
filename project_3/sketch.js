// let angleOffset = 0;
// let growth = 0;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(30);
// }

// function draw() {
//   background(100);

//   // Calculate the growth and twisting
//   growth = sin(frameCount * 0.05) * 30;
//   angleOffset += 0.01;

//   translate(width / 2, height / 2);
//   star(0, 0, 50 + growth, 70 + growth, 10);
// }




//   function star(x, y, radius1, radius2, npoints) {
//     let angle = TWO_PI / npoints;
//     let halfAngle = angle / 2.0;
//     beginShape();
//     for (let a = 0; a < TWO_PI; a += angle) {
//       let sx = x + cos(a) * radius2;
//       let sy = y + sin(a) * radius2;
//       vertex(sx, sy);
//       sx = x + cos(a + halfAngle) * radius1;
//       sy = y + sin(a + halfAngle) * radius1;
//       vertex(sx, sy);
//     }
//     endShape(CLOSE);
//   }


let angleOffset = 0;
let growth = 0;
let growthRate = 0.05;
let noiseOffset = 0;


let spacingFactorX = 0.3;
let spacingFactorY = 0.7;

// let randomStar = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  noiseDetail(4, 0.5);

//   randomStar = {
//     NumPoints: random(7, 12),
//     InnerRadius: 15 + growth + random(-5, 5),
//     OuterRadius: 50 + growth + random(-10, 10)
//   }
}

function draw() {
  background(255,255,255);

  fill(255,0,0);

  noStroke();

  let cols = 9;
  let rows = 10;
  let spacingX = width / (cols + 1)  * spacingFactorX;
  let spacingY = height / (rows + 1) * spacingFactorY;

  growth += growthRate;
  noiseOffset += 0.01;

  angleOffset += 0.01;

  push();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
    if (j === 0 || (i === 0 && j < cols) || (i === 4 && j < cols - 1)) {
      let x = spacingX * (j + 1);
      let y = spacingY * (i + 1);

    //   growth = sin(frameCount * 0.05) * 10;

    //   let NumPoints = random(7, 12);
    //   let InnerRadius = random(10,15) + growth;
    //   let OuterRadius = random(30,50) + growth;

    // let points = floor(10 + growth / 10);

      push();
      translate(x, y);
      drawDynamicStar(0, 0, 15 + growth, 50 + growth, 10 + growth / 2); 
    // drawDynamicStar(0, 0, InnerRadius, OuterRadius, NumPoints); 
      pop();
    }
    }
  }
  pop();


//   push();
//   growth = sin(frameCount * 0.05) * 30; // This will create a pumping effect
//   angleOffset += 0.01; // This creates the twisting

//   translate(width / 2, height / 2);
//   drawDynamicStar(0, 0, 50 + growth, 100 + growth, 10);
//   pop();

}

function drawDynamicStar(x, y, baseRadius1, baseRadius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     // Add dynamic growth to inner and outer radii for sharper angle effect
//     let dynamicRadius1 = baseRadius1 + sin(a * 5 + frameCount * 0.1) * 5;
//     let dynamicRadius2 = baseRadius2 + sin(a * 7 + frameCount * 0.2) * 5;

//     // Outer point (with dynamic radius for sharper points)
//     let sx = x + cos(a + angleOffset) * dynamicRadius2;
//     let sy = y + sin(a + angleOffset) * dynamicRadius2;
//     vertex(sx, sy);

//     // Inner point (also with dynamic radius)
//     sx = x + cos(a + halfAngle + angleOffset) * dynamicRadius1;
//     sy = y + sin(a + halfAngle + angleOffset) * dynamicRadius1;
//     vertex(sx, sy);
//   }

beginShape();
for (let a = 0; a < TWO_PI; a += angle) {
    
    let noiseValue = noise(noiseOffset + a);

  // No pumping, only continuous growth for inner and outer radii
  let dynamicRadius1 = baseRadius1;
  let dynamicRadius2 = baseRadius2;

  // Outer point
  let sx = x + cos(a + angleOffset) * dynamicRadius2;
  let sy = y + sin(a + angleOffset) * dynamicRadius2;
  vertex(sx, sy);

  // Inner point
  sx = x + cos(a + halfAngle + angleOffset) * dynamicRadius1;
  sy = y + sin(a + halfAngle + angleOffset) * dynamicRadius1;
  vertex(sx, sy);
}
  endShape(CLOSE);
}



//   function star(x, y, radius1, radius2, npoints) {
//     let angle = TWO_PI / npoints;
//     let halfAngle = angle / 2.0;
//     beginShape();
//     for (let a = 0; a < TWO_PI; a += angle) {
//       let sx = x + cos(a) * radius2;
//       let sy = y + sin(a) * radius2;
//       vertex(sx, sy);
//       sx = x + cos(a + halfAngle) * radius1;
//       sy = y + sin(a + halfAngle) * radius1;
//       vertex(sx, sy);
//     }
//     endShape(CLOSE);
//   }





// let angleOffset = 0; // For twisting
// let growth = 0; // For pumping

// function setup() {
//   createCanvas(400, 400);
//   frameRate(30);
// }

// function draw() {
//   background(100);

//   // Calculate the growth and twisting
//   growth = sin(frameCount * 0.05) * 30; // This will create a pumping effect
//   angleOffset += 0.03; // This creates the twisting

//   translate(width / 2, height / 2);
//   drawTwistedStar(0, 0, 50 + growth, 70 + growth, 20);
// }

// function drawTwistedStar(x, y, radius1, radius2, npoints) {
//   let angle = TWO_PI / npoints;
//   let halfAngle = angle / 2.0;

//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     // Make the outer points more varied and sharper
//     let radiusVariation = map(sin(a * 3 + frameCount * 0.1), -1, 1, -10, 20);
//     let currentRadius2 = radius2 + radiusVariation;

//     let sx = x + cos(a + angleOffset) * currentRadius2;
//     let sy = y + sin(a + angleOffset) * currentRadius2;
//     vertex(sx, sy);

//     // Make the inner points sharper by varying their radii based on the outer shape
//     let innerRadiusVariation = map(cos(a * 3 + frameCount * 0.1), -1, 1, -5, 10);
//     let currentRadius1 = radius1 + innerRadiusVariation;

//     sx = x + cos(a + halfAngle + angleOffset) * currentRadius1;
//     sy = y + sin(a + halfAngle + angleOffset) * currentRadius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }
