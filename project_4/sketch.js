var mic;
let audioChange = document.getElementById("audioVisualization");

function setup(){
    let myCanvas = createCanvas (200, 200);

    myCanvas.parent("audioVisualization");

    mic = new p5.AudioIn();

    let audioStart = document.getElementById('songs');

    audioStart.onclick = function(e) {
        userStartAudio(); 
        mic.start();
    }


}

function draw(){
    background(0,0,0,0);

    // fill(77, 77, 77);
    // noStroke();

    var vol = mic.getLevel();

    // for (let i = 0; i < bpmSize.length; i++) {
    //     bpmSize[i].style.width = (vol * 20) + 'vw';
    //     bpmSize[i].style.height = (vol * 20) + 'vw';
    // }

    audioChange.style.width = (vol*200) + 40 + 'vw';


    // rect(100, 100, vol*200, vol*200);

}
