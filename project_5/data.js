const firebaseConfig = {
    apiKey: "AIzaSyCqP6qxH7PjGVCLMJBTFPGBNcFARqDxd6U",
    authDomain: "next-level-coding-e3baa.firebaseapp.com",
    databaseURL: "https://next-level-coding-e3baa-default-rtdb.firebaseio.com",
    projectId: "next-level-coding-e3baa",
    storageBucket: "next-level-coding-e3baa.firebasestorage.app",
    messagingSenderId: "791700513638",
    appId: "1:791700513638:web:5ca77fb9f4598ef2239ea7"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("wishlist");


const ownerName = document.getElementById("ownerName");

const itemGrid = document.getElementById("itemGrid");


if (document.body.id === "storePage") {

    const userName = document.getElementById("name1-data");
    const itemName = document.getElementById("name2-data");
    const price = document.getElementById("price-data");
    const link = document.getElementById("link-data");
    const category = document.getElementById("type-data");
    const description = document.getElementById("des-data");
    const sendButton = document.getElementById("push-data");
    const StarFall = document.getElementById("stars");
    
    sendButton.onclick = function(event){

    // StarFall.style.visibility = "visible";

    // event.preventDefault();

    const text = {
        userName: userName.value,
        itemName: itemName.value,
        price: price.value,
        link: link.value,
        category: category.value,
        description: description.value,
    };

    userName.value = "";
    itemName.value = "";
    price.value = "";
    link.value = "";
    category.value = "";
    description.value = "";

    ref.push(text);
};

}else if (document.body.id === "displayPage") {

ref.on("value", (snapshot) => {
	// get the data from firebase
	const data = snapshot.val();
    console.log("Data retrieved from Firebase:", data);

	// clear out the old chatroom HTML
	ownerName.innerHTML = "";
    itemGrid.innerHTML = "";




	// use a for ... in loop to populate the chatroom
	for (const key in data) {
		ownerName.innerHTML += `
			<p>${data[key].userName}</p>`;

        const itemData = data[key];
        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("id", "item");

        const nameDiv = document.createElement("div");
        nameDiv.setAttribute("id", "name");
        nameDiv.textContent = itemData.itemName;

        const priceDiv = document.createElement("div");
        priceDiv.setAttribute("id", "price");
        priceDiv.textContent = `$${itemData.price}`;

        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(priceDiv);


        itemGrid.appendChild(itemDiv);


        changeGrid();

        //study from https://editor.p5js.org/sobers/sketches/hrMPPNoC5

        let count = 0;
        let wiggle;

        let textWiggle = itemData.itemName;

        let font;

        let starsWiggle = [];
        let numStars = 100;

        let baseTextSize = 5;


        let drawCanvas = function (draw) {

            draw.preload = function(){
                font = draw.loadFont('assets/Rafaella.ttf');
            }


            draw.setup = function () {
                let canvas = draw.createCanvas(draw.windowWidth / 4.02, draw.windowWidth / 3.35);
                canvas.parent(itemDiv);

                draw.textSize(50);
                draw.textAlign(draw.LEFT, draw.CENTER);
                // draw.textFont(font);
                draw.textWrap(draw.WORD);

                for(let i = 0; i < numStars; i++){
                    starsWiggle.push({
                        x: draw.random(draw.width),
                        y: draw.random(draw.height),
                        size1: draw.random(1,6),
                        size2: draw.random(0,2),
                        points: draw.floor(draw.random(3,10)),
                        // alpha: draw.random(10, 255),
                        wiggleFre: draw.random(1,5),
                        baseY: 0
                    });
                }
                
            };
    
            draw.draw = function () {
        // Clear the canvas completely
        draw.clear();
        draw.background(124, 98, 60, 0);
        // draw.background(0, 10, 60);

        count++;

        draw.fill(255);

        let dynamicTextSize = draw.map(draw.width, 300, 1920, baseTextSize, baseTextSize * 2);
        if (textWiggle.length > 6) {
            draw.textSize(dynamicTextSize);
        } else {
            draw.textSize(dynamicTextSize * 1.5);
        }


        draw.push();

        for(let starWiggle of starsWiggle){
            draw.fill(255, 255, 255, draw.random(10, 255));
            draw.noStroke();
            let wiggle2 = draw.sin(draw.radians(count * starWiggle.wiggleFre)) * 10;
            draw.star(starWiggle.x  + wiggle2 / 2, starWiggle.y  + wiggle2, starWiggle.size1, starWiggle.size2, starWiggle.points);
        }

        draw.pop();





        let totalTextWidth = draw.textWidth(textWiggle);
        let startX = draw.width / 2 - totalTextWidth / 2;

        
        for (let i = 0; i < textWiggle.length; i++) {
            let char = textWiggle[i];

            // Unique wiggle offset for each letter
            let frequencyOffset = i * 10; // Adjust for variation
            let wiggle = draw.map(
                draw.sin(draw.radians(count * 2 + frequencyOffset)),
                -1,
                1,
                -5,
                5
            );

            // Calculate individual letter position
            let charX = startX + draw.textWidth(textWiggle.substring(0, i));
            let charY = draw.height / 2 + wiggle;

            // Draw each character
            draw.text(char, charX, charY);
        }
    };

    draw.star = function(x, y, radius1, radius2, npoints) {
        let angle = draw.TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        draw.beginShape();
        for (let a = 0; a < draw.TWO_PI; a += angle) {
          let sx = x + draw.cos(a) * radius2;
          let sy = y + draw.sin(a) * radius2;
          draw.vertex(sx, sy);
          sx = x + draw.cos(a + halfAngle) * radius1;
          sy = y + draw.sin(a + halfAngle) * radius1;
          draw.vertex(sx, sy);
        }
        draw.endShape(draw.CLOSE);
      }

    draw.windowResized = function () {
        draw.resizeCanvas(draw.windowWidth / 4.02, draw.windowWidth / 3.35);

    };
        };

    
        new p5(drawCanvas);
    
    }
});


function changeGrid() {
    const gridSmall = document.getElementById("g1");
    const gridLarge = document.getElementById("g2");

    gridSmall.onclick = function (e) {
        itemGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
        itemGrid.style.paddingLeft = "0px";
        itemGrid.style.paddingRight = "10px";

        
        const gridItems = document.querySelectorAll("#itemGrid #item");

        gridItems.forEach((item) => {
            item.style.width = "18.3vw";
            item.style.height = "23.3vw";
        });
    };

    gridLarge.onclick = function (e) {

        itemGrid.style.gridTemplateColumns = "repeat(3, 1fr)";

        const gridItems = document.querySelectorAll("#itemGrid #item");

        gridItems.forEach((item) => {
            item.style.width = "25vw";
            item.style.height = "30vw";
        });
    };
}

}
