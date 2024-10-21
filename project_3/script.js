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
// const imgArray2 = ["assets/ma1.jpg", "assets/ma2.jpg", "assets/ma3.jpg"]; 

function changeBackgroundImg(){
    let num = Math.floor(Math.random() * (imgArray.length));
    // let num2 = Math.floor(Math.random() * (imgArray2.length));
    document.body.style.backgroundImage = `url('${imgArray[num]}')`; 
    // document.body.style.backgroundImage = `url('${imgArray2[num2]}')`; 
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
    followers.style.width = result.stats.followers * 0.0002 + 'px';

    let listeners = document.getElementById('f2');
    listeners.style.width = result.stats.monthlyListeners * 0.00003 + 'px';

    let ranks = document.getElementById('f3');

    let ranksRange = map(result.stats.worldRank, 0, 100, 900, 600);
    ranks.style.height = ranksRange + 'px';

    // let followers = document.getElementById('f1');
    // followers.style.width = result.data.edge_followed_by.count * 0.0002 + 'px';

    // let F2 = document.getElementById('f2');
    // F2.style.width = 300 + 'px';

    // let F3 = document.getElementById('f3');
    // F3.style.height = 600 + 'px';

    // let fd = document.getElementById('followersData');

    // followers.onmouseover = function(e){
    //     fd.innerHTML = result.stats.followers + " Followers" ;
    // }

    // followers.onmouseout = function(e){
    //     fd.innerHTML = "";
    // }
    



	// console.log(result.stats);
    console.log(result);




} catch (error) {
	console.error(error);
}

}

getData();




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
