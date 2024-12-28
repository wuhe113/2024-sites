

let mainCanvas = function(main){
main.setup = function(){
    let myCanvas = main.createCanvas(main.windowWidth, main.windowHeight);
    myCanvas.parent("stars");
}

main.draw = function(){
    main.background(124, 98, 60, 0);

}


main.mousePressed = function(){
    main.noStroke();
    main.fill(255,255,255, main.random(10, 255));


    main.star(main.mouseX, main.mouseY, main.random(1, 5), main.random(10, 15), main.floor(main.random(3, 10)));
}

main.star = function(x, y, radius1, radius2, npoints) {
    let angle = main.TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    main.beginShape();
    for (let a = 0; a < main.TWO_PI; a += angle) {
      let sx = x + main.cos(a) * radius2;
      let sy = y + main.sin(a) * radius2;
      main.vertex(sx, sy);
      sx = x + main.cos(a + halfAngle) * radius1;
      sy = y + main.sin(a + halfAngle) * radius1;
      main.vertex(sx, sy);
    }
    main.endShape(main.CLOSE);
  }
};



// let drawCanvas = function (draw) {
//     draw.setup = function () {
//         let canvas = draw.createCanvas(200, 200);
//         canvas.parent(itemDiv);
//     };

//     draw.draw = function () {
//         draw.background(124, 98, 60);
//         draw.ellipse(100, 100, 80, 80);
//     };
// };

new p5(mainCanvas);
// new p5(drawCanvas);


  