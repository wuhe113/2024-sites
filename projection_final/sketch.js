// const density = '                         Ñ@#W$9876543210?!abc;:+=-,._';

// // let puppy;

// let video;

// // function preload(){
// //     puppy = loadImage("assets/puppy.png");
// // }

// function setup(){
//     noCanvas();

//     video = createCapture(VIDEO);
//     video.size(134, 48);

//     asciiDiv = createDiv();
// }

//     // image(puppy, 0, 0, width, height);
// function draw(){
//     // let w = width / puppy.width;
//     // let h = height / puppy.height;

//     // puppy.loadPixels();

//         video.loadPixels();

//         let asciiImage = '';

//     for(let j = 0; j < video.height; j++){
//         for (let i = 0; i < video.width; i++){
//             const pixelIndex = (i + j * video.width)*4;
//             const r = video.pixels[pixelIndex + 0];
//             const g = video.pixels[pixelIndex + 1];
//             const b = video.pixels[pixelIndex + 2];
//             const avg = (r + g + b) / 3;


//             const len = density.length;
//             const charIndex = floor(map(avg, 0, 220, len, 0));


//             // textSize(w);
//             // textAlign(CENTER, CENTER);
//            const c = density.charAt(charIndex);

//            if(c == ' ') asciiImage += '&nbsp;'
//            else asciiImage += c;
//         }

//         asciiImage += '<br/>'
//         // createDiv(row);
//         // console.log(row);
//     }

//     asciiDiv.html(asciiImage);
// }

const density = '                         Ñ@#W$9876543210?!abc;:+=-,._';

let video;
let asciiDiv;

function setup() {
  noCanvas();

  // Enumerate video devices to select the external camera
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    const videoDevices = devices.filter((device) => device.kind === 'videoinput');
    console.log(videoDevices); // List all video input devices

    const externalCamera = videoDevices.find((device) =>
      device.label.includes('External') // Adjust label to match your external camera
    );

    // Configure video capture with external camera if found
    if (externalCamera) {
      video = createCapture({
        video: { deviceId: externalCamera.deviceId },
      });
    } else {
      // Fall back to default camera
      video = createCapture(VIDEO);
    }

    video.size(134, 48); // Lower resolution for performance
    video.hide(); // Hide the video element
    asciiDiv = createDiv(); // Create a div for ASCII art
  });
}

function draw() {
  if (!video) return; // Wait until the video is initialized

  video.loadPixels();

  let asciiImage = '';

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      // Flip the video horizontally
      const flippedX = video.width - i - 1; // Reverse the x-coordinate

      const pixelIndex = (flippedX + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 220, len, 0));

      const c = density.charAt(charIndex);
      asciiImage += c === ' ' ? '&nbsp;' : c;
    }
    asciiImage += '<br/>';
  }

  asciiDiv.html(asciiImage);
}

