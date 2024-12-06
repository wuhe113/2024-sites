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

        let w = 250;
        let y = 290;


        let drawCanvas = function (draw) {

            draw.preload = function(){
                font = draw.loadFont('assets/Rafaella.ttf');
            }


            draw.setup = function () {
                let canvas = draw.createCanvas(w, y);
                canvas.parent(itemDiv);

                draw.textSize(50);
                draw.textAlign(draw.LEFT, draw.TOP);
                draw.textFont(font);
                draw.textWrap(draw.WORD);
                
            };
    
            draw.draw = function () {
        // Clear the canvas completely
        draw.clear();
        draw.background(124, 98, 60, 0);
        // draw.background(0, 10, 60);

        count++;

        draw.fill(255);

        if (textWiggle.length > 6) {
            draw.textSize(30);
        } else {
            draw.textSize(50);
        }



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

    // draw.windowResized = function () {
    //     draw.resizeCanvas(draw.windowWidth, draw.windowHeight);
    // };
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
