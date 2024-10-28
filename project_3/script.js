let l1 = document.getElementById("line1");
let l2 = document.getElementById("line2");

document.onmousemove = function(e){
    l1.style.top = e.clientY + "px";
    l2.style.left = e.clientX + "px";



}

let glitchOverlay = document.getElementById('glitch-overlay');

let letterF1 = document.getElementById('f1');
let letterF2 = document.getElementById('f2');
let letterF3 = document.getElementById('f3');

let name1 = document.getElementById('artist1');

let mouseLine1 = document.getElementById('line1');
let mouseLine2 = document.getElementById('line2');


const imgArray = ["assets/cr1.jpg", "assets/cr2.jpg", "assets/cr3.jpg"]; 
const imgArray2 = ["assets/ma1.jpg", "assets/ma2.jpg", "assets/ma3.jpg"]; 
const imgArray3 = ["assets/e1.jpg", "assets/e2.jpg", "assets/e3.jpg"]; 
const imgArray4 = ["assets/mf1.jpg", "assets/mf2.jpg", "assets/mf3.jpg"]; 
const imgArray5 = ["assets/a1.jpg", "assets/a2.jpg", "assets/a3.jpg"]; 
const imgArray6 = ["assets/s1.jpg", "assets/s2.jpg", "assets/s3.jpg"]; 
const imgArray7 = ["assets/sk1.jpg", "assets/sk2.jpg", "assets/sk3.jpg"]; 
const imgArray8 = ["assets/nj1.jpg", "assets/nj2.jpg", "assets/nj3.jpg"]; 
const imgArray9 = ["assets/cx1.jpg", "assets/cx2.jpg", "assets/cx3.jpg"]; 
const imgArray10 = ["assets/db1.jpg", "assets/db2.jpg", "assets/db3.jpg", "assets/db4.jpg"]; 
const imgArray11 = ["assets/ds1.jpg", "assets/ds2.jpg", "assets/ds3.jpg", "assets/ds4.jpg", "assets/ds5.jpg"]; 
const imgArray12 = ["assets/n1.jpg", "assets/n2.jpg", "assets/n3.jpg"]; 
const imgArray13 = ["assets/k1.jpg", "assets/k2.jpg", "assets/k3.jpg"]; 



const allImgArrays = [imgArray, imgArray2, imgArray3, imgArray4, imgArray5, imgArray6, imgArray7, imgArray8, imgArray9, imgArray10, imgArray11, imgArray12, imgArray13];

let currentArrayIndex = 0;

function changeBackgroundImg(){
    let currentArray = allImgArrays[currentArrayIndex];
    let num = Math.floor(Math.random() * currentArray.length);
    document.body.style.backgroundImage = `url('${currentArray[num]}')`; 
}

// function changeBackgroundImg2(){
//     let num2 = Math.floor(Math.random() * (imgArray2.length));
//     document.body.style.backgroundImage = `url('${imgArray2[num2]}')`; 
// }

function switchImageArray() {
    currentArrayIndex = (currentArrayIndex + 1) % allImgArrays.length;
    changeBackgroundImg();
}



function triggerGlitch() {
    glitchOverlay.classList.add('glitch-active');
    document.body.style.color = ('black');
    letterF1.style.backgroundColor = ('black');
    letterF2.style.backgroundColor = ('black');
    letterF3.style.backgroundColor = ('black');
    // name1.style.visibility = ('visible');
    // mouseLine1.style.backgroundColor = ('black');
    // mouseLine2.style.backgroundColor = ('black');
    changeBackgroundImg();
    


    setTimeout(() => {
        glitchOverlay.classList.remove('glitch-active');
        document.body.style.color = ('red');
        letterF1.style.backgroundColor = ('red');
        letterF2.style.backgroundColor = ('red');
        letterF3.style.backgroundColor = ('red');
        // name1.style.visibility = ('hidden');
        // mouseLine1.style.backgroundColor = ('red');
        // mouseLine2.style.backgroundColor = ('red');
    }, 200);
}

setInterval(triggerGlitch, 5000);




function map(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

async function getData() {
const url = 'https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=7GlBOeep6PqTfFi59PTUUN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '03118cb151msha37940bec131f3ep1379f0jsn9c1e5387bce7',
		'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
	}
};

// const url2 = 'https://instagram-scraper-api3.p.rapidapi.com/user_followers_adv?username_or_id=madelineargy';
// const options2 = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '03118cb151msha37940bec131f3ep1379f0jsn9c1e5387bce7',
// 		'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com'
// 	}
// };

try {
	const response = await fetch(url, options);
    // const response = await fetch(url2, options2);
	const result = await response.json();
    
    let followers = document.getElementById('f1');
    followers.style.width = '0px';

    setTimeout(() => { 
        followers.style.width = result.stats.followers * 0.0002 + 'px'; 
    }, 2000);

    // let followersRange = map(result.stats.followers, 0, )

    let listeners = document.getElementById('f2');
    listeners.style.width = '0px';

    setTimeout(() => { 
        listeners.style.width = result.stats.monthlyListeners * 0.00003 + 'px';
    }, 2000);

    let ranks = document.getElementById('f3');
    ranks.style.height= '0px';

    let ranksRange = map(result.stats.worldRank, 0, 100, 1200, 700);
    setTimeout(() => { 
        ranks.style.height = ranksRange + 'px';    
    }, 10);

    // let followers = document.getElementById('f1');
    // followers.style.width = result.data.edge_followed_by.count * 0.0002 + 'px';

    // let F2 = document.getElementById('f2');
    // F2.style.width = 300 + 'px';

    // let F3 = document.getElementById('f3');
    // F3.style.height = 600 + 'px';

    let fd = document.getElementById('followersData');
    let ld = document.getElementById('listenersData');
    let rd = document.getElementById('ranksData');

    // followers.onmouseenter = function(e){
    //     fd.innerHTML = result.stats.followers + " Followers" ;
    //     followers.style.height = "5.5vw";
    // }

    // followers.onmouseleave = function(e){
    //     fd.innerHTML = "";
    //     followers.style.height = "3.5vw";
    // }

    // followers.onmouseenter = function(e){
    //     fd.innerHTML = result.data.edge_followed_by.count + " Followers" ;
    // }

    // followers.onmouseleave = function(e){
    //     fd.innerHTML = "";
    // }

    
    
    // listeners.onmouseenter = function(e){
    //     ld.innerHTML = result.stats.monthlyListeners + " Monthly Listeners" ;
    //     listeners.style.height = "5.5vw";
    // }

    // listeners.onmouseleave = function(e){
    //     ld.innerHTML = "";
    //     listeners.style.height = "3.5vw";
    // }

    // ranks.onmouseenter = function(e){
    //     rd.innerHTML = result.stats.worldRank + " World Rank" ;
    //     ranks.style.width = "5.8vw";
    // }

    // ranks.onmouseleave = function(e){
    //     rd.innerHTML = "";
    //     ranks.style.width = "3.8vw"
    // }
    

    



	// console.log(result.stats);
    console.log(result);




} catch (error) {
	console.error(error);
}

}

getData();

const widths = ['800px', '500px', '1200px', '250px', '350px', '700px', '350px', '900px', '800px', '350px', '600px', '400px', '200px'];
const widths2 = ['2500px', '600px', '600px', '350px', '600px', '1500px', '550px', '2000px', '2500px', '1500px', '600px', '700px', '600px'];
const height = ['880px', '700px', '700px', '700px', '700px', '700px', '700px', '700px', '800px', '700px', '700px', '700px', '700px'];

const skew = ['-20deg', '-10deg', '-10deg', '-20deg', '-10deg', '-20deg', '-20deg', '-20deg', '-20deg', '-20deg', '-10deg', '-20deg', '-10deg'];

const left = ['18%', '23%', '23%', '18%', '23%', '18%', '18%', '18%', '18%', '18%', '23%', '18%', '23%'];
const right = ['12%', '23%', '23%', '12%', '23%', '12%', '12%', '12%', '12%', '12%', '23%', '12%', '23%'];


const names = ['CHAPPELL ROAN', 'MADELINE ARGY', 'EMMA CHAMBERLAIN', 'MUSTAFA', 'ALEX CONSANI', 'LITTLE SIMZ', 'SKEPTA', 'NEWJEANS', 'CHARILI XCX', 'D-BLOCK EUROPE', 'DOMINIC SESSA', 'NIA ARCHIVES', 'KRISTEN MCMENAMY'];
const issues = ['issue 20', 'issue 20', 'issue 20', 'issue 20', 'issue 19', 'issue 19', 'issue 19', 'issue 19', 'issue 18',  'issue 18', 'issue 18', 'issue 18', 'issue 18'];

// const rotate = ['-70deg', '-80deg', '-80deg', '-80deg'];


let currentIndex = 0; 

let textDisplay = document.getElementById('celebrities');

let letterF = document.getElementById('F');

let THE = document.getElementById('logo1');
let ACE = document.getElementById('logo2');

let nextButton = document.getElementById('next');

nextButton.onclick = function(e){

    currentIndex = (currentIndex + 1) % widths.length;

    // textDisplay.classList.add('slide-out');


    textDisplay.innerHTML = names[currentIndex];

    issue.innerHTML = issues[currentIndex];
    // textDisplay.style.transform = `rotate(${rotate[currentIndex]})`;
        
    //     textDisplay.classList.remove('slide-out');
    // textDisplay.style.animation = 'none';
    // void textDisplay.offsetHeight;
    // textDisplay.style.animation = '';
    // textDisplay.classList.add('slide-in'); 

    letterF.style.transform = `skew(${skew[currentIndex]})`;
    letterF1.style.width = widths[currentIndex];
    letterF2.style.width = widths2[currentIndex];
    letterF3.style.height = height[currentIndex];

    THE.style.right = right[currentIndex];
    ACE.style.left = left[currentIndex];



    

//     const url = 'https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=7GlBOeep6PqTfFi59PTUUN';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '03118cb151msha37940bec131f3ep1379f0jsn9c1e5387bce7',
// 		'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
// 	}
// };

// getData(url, options);

switchImageArray();

};

window.onload = function() {
    setTimeout(() => { changeBackgroundImg();    }, 5000);
};

let issue = document.getElementById('issue');

// let moveF = document.getElementById('F');
// let moveLogo1 = document.getElementById('logo1');
// let moveLogo2 = document.getElementById('logo2');


let offsetX, offsetY, activeElement;


function makeElementDraggable(element) {
    element.onmousedown = function(e) {
        activeElement = element;

        offsetX = e.clientX - activeElement.offsetLeft;
        offsetY = e.clientY - activeElement.offsetTop;

        document.onmousemove = dragElement;
        document.onmouseup = stopDragElement;
    };
}

function dragElement(e) {
    activeElement.style.left = (e.clientX - offsetX) + 'px';
    activeElement.style.top = (e.clientY - offsetY) + 'px';
}

function stopDragElement() {
    document.onmousemove = null;
    document.onmouseup = null;
}

makeElementDraggable(textDisplay);
makeElementDraggable(issue);
// makeElementDraggable(moveF);
// makeElementDraggable(moveLogo1);
// makeElementDraggable(moveLogo2);



// async function getData() {

//     try{

//         const myUrl = 'https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=7GlBOeep6PqTfFi59PTUUN';
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '03118cb151msha37940bec131f3ep1379f0jsn9c1e5387bce7',
//                 'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
//             }
//         };

//         const response = await fetch(myUrl);
//         const data = await response.json();

//         console.log(data);


//     }catch(error){
//         console.error(error.message);
//     }
    
// }

// getData();


// $("document").ready(function(){

//     $("#celebrities").draggable();

      
//     });
