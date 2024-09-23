// let angle = 0;

// function setup(){
//     createCanvas(600,600, WEBGL);
    
//     p0 = createVector(0, 300);
//     p1 = createVector(100, 400);
//     p2 = createVector(200, 200);
//     p3 = createVector(400, 300);

    
// }

// function draw(){
//     background(0);

//     translate(-300, -300, 0);

//     rotateX(angle);
//     rotateY(angle * 0.5);
//     rotateZ(angle * 0.3);



//     stroke(255);
//     strokeWeight(6);

//     let dots = 0.07;


//     noFill();
//     beginShape();

//     for (let t = 0; t <= 1; t += dots) {

//         let v = cubic(p0, p1, p2, p3, t);


//         vertex(v.x, v.y);
//     }
//     endShape();

//     angle += 0.01;

// }


//     function cubic(p0, p1, p2, p3, t){
//         let v1 = quadratic (p0, p1, p2, t);
//         let v2 = quadratic (p1, p2, p3, t);
//         let x = lerp(v1.x, v2.x, t);
//         let y = lerp(v1.y, v2.y, t);

//         line(v1.x, v1.y, v2.x, v2.y);

//         return createVector(x,y);
//     }

//     function quadratic(p0, p1, p2, t){

//         let x1 = lerp(p0.x, p1.x, t);
//         let y1 = lerp(p0.y, p1.y, t);
//         let x2 = lerp(p1.x, p2.x, t);
//         let y2 = lerp(p1.y, p2.y, t);
//         let x = lerp(x1, x2, t);
//         let y = lerp(y1, y2, t);
//         return createVector(x,y);
//     }




    // strokeWeight(4);
    // noFill();
    // beginShape();
    // vertex
    // bezier(0, 300, 100, 100, 400, 400, 600, 300,);


    // angle += 0.07;


// Acknowledgment: ChatGPT provided insights and helped writing this code of creating 3D spiral
    let angle = 0;

    let raindropX = [];
    let raindropY = [];
    let raindropSpeed = [];
    let raindropLength = [];

    function setup() {

      let myCanvas2 = createCanvas(windowWidth / 2, windowHeight, WEBGL);
      myCanvas2.parent("RNA");

      for (let i = 0; i < 100; i++) {
        raindropX[i] = random(width); 
        raindropY[i] = random(-500, -50); 
        raindropSpeed[i] = random(2, 5);     
        raindropLength[i] = random(10, 20);
      }


      // c1 = color (0,0,1);
      // c2 = color (0,255,0);
    }
    
    function draw() {
      background(0,0,0,0);

      translate(0, 0, 0);

      raindrops();


      push();

      rotateY(angle);
      angle += 0.01;
      
      let r = 50;  // Radius of the spiral
      let h = 500;  // Height of the spiral
      let numTurns = 5;  // Number of turns in the spiral
      let steps = 100;    // Number of points in the spiral
      let dTheta = TWO_PI / steps;
      let dz = h / (numTurns * steps);
    
      let prevX, prevY, prevZ;
    
      for (let i = 0; i < numTurns * steps; i++) {
        let theta = i * dTheta;
        let x = r * cos(theta);
        let z = r * sin(theta);
        let y = -h / 2 + i * dz;
        
        if (i > 0) {

          // Draw a line from the previous point to the current point
          strokeWeight(4);
          
          if (i % 4 == 0) {
            stroke(0, 255, 0); // Adenine (A)
          } else if (i % 4 == 1) {
            stroke(255, 165, 0); // Uracil (U)
          } else if (i % 4 == 2) {
            stroke(0, 0, 255); // Cytosine (C)
          } else if (i % 4 == 3) {
            stroke(255, 255, 0); // Guanine (G)
          }
    
    
          line(prevX, prevY, prevZ, x, y, z);
        }
    
        // Save the current point as the previous point for the next iteration
        prevX = x;
        prevY = y;
        prevZ = z;
      }
      pop();

    }


    function raindrops(){

      push();

      translate(-300, -300, 0);

  
  for (let i = 0; i < raindropX.length; i++) {

    stroke(0,0,255);
    strokeWeight(2);
    line(raindropX[i], raindropY[i], raindropX[i], raindropY[i] + raindropLength[i]);
    

    raindropY[i] += raindropSpeed[i];
    

    if (raindropY[i] > height) {
      raindropY[i] = random(-200, -100);
      raindropX[i] = random(width);
    }
  }
  pop();
    }


    function windowResized() {
      resizeCanvas(windowWidth / 2, windowHeight);
    }


    // function gradient(x,y,z){
    //   rect(30, 20, 55, 40);
    // }

    // function raindrops(x,y,z){

    //     push();

    //     translate(x,y,z);


    //     noStroke();
    //     fill('red');
    //     // curve(-150, 275, 50, 60, 50, 60, 250, 275);
    //     // sphere(10);

    //     pop();
    // }
    
    