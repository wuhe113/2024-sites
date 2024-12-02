function setup(){
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("stars");
}

function draw(){
    background(124, 98, 60, 0);

}


function mousePressed(){
    noStroke();
    fill(255,255,255, random(10, 255));


    star(mouseX, mouseY, random(1, 5), random(10, 15), floor(random(3, 10)));
}

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
  