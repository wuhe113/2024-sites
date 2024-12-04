const density = '                         Ñ@#W$9876543210?!abc;:+=-,._';

// let puppy;

let video;

// function preload(){
//     puppy = loadImage("assets/puppy.png");
// }

function setup(){
    noCanvas();

    video = createCapture(VIDEO);
    video.size(134, 48);

    asciiDiv = createDiv();
}

    // image(puppy, 0, 0, width, height);
function draw(){
    // let w = width / puppy.width;
    // let h = height / puppy.height;

    // puppy.loadPixels();

        video.loadPixels();

        let asciiImage = '';

    for(let j = 0; j < video.height; j++){
        for (let i = 0; i < video.width; i++){
            const pixelIndex = (i + j * video.width)*4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;


            const len = density.length;
            const charIndex = floor(map(avg, 0, 220, len, 0));


            // textSize(w);
            // textAlign(CENTER, CENTER);
           const c = density.charAt(charIndex);

           if(c == ' ') asciiImage += '&nbsp;'
           else asciiImage += c;
        }

        asciiImage += '<br/>'
        // createDiv(row);
        // console.log(row);
    }

    asciiDiv.html(asciiImage);
}