var mic;

function setup(){
    let myCanvas = createCanvas (200, 200);

    myCanvas.parent("audioVisualization");

    mic = new p5.AudioIn();
    mic.start();
}

function draw(){
    background(0);

    var vol = mic.getLevel();

    ellipse(100, 100, vol*200, vol*200);

}