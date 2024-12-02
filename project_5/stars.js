class stars{

    constructor(){
        let x = random(width);
        let y = random(-100, -10);

        this.pos = createVector(x, y);
        this.vel = createVector(random(-2, 2), random(0, 5));
        this.acc = createVector();

        this.rotation = random(TWO_PI);
        this.rotationSpeed = random(-0.05, 0.05);

        this.opacity = random(10, 255);
        this.size1 = random(1, 5);
        this.size2 = random(10, 15);
        this.point = floor(random(3, 10));
        // this.dir = (random(1) > 0.5) ? 1 : -1;

    }

    update(){
        this.acc = gravity;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.rotation += this.rotationSpeed;

        // this.angle += this.dir * this.vel.meg() / 100;
    }

    render(){
        push();
        fill(124,98,60,this.opacity);
        noStroke();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotation); 
        // strokeWeight(4);
        // point(this.pos.x, this.pos.y);
        star(0, 0, this.size1, this.size2, this.point);
        pop();
        
    }

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
  