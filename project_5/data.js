// window.addEventListener("load", () => {
//     localStorage.clear();
//     sessionStorage.clear(); 
//     console.log("localStorage has been cleared.");
// });


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
    const submit = document.getElementById("submit");
    
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

    submit.style.display = "block";

    setTimeout(function () {
        submit.style.display = "none";
    }, 3000);
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
        itemDiv.setAttribute("class", "item");

        // const itemShadow = data[key];
        const shadowDiv = document.createElement("div");
        shadowDiv.setAttribute("class", "itemShadow");

        // const namePriceDiv = document.createElement("div");
        // namePriceDiv.setAttribute("id", "namePrice");

        const nameDiv = document.createElement("div");
        nameDiv.setAttribute("id", "name");
        nameDiv.textContent = itemData.itemName;
        nameDiv.addEventListener('click', () => {
            window.location.href = `${data[key].link}`;
        });

        const add = document.createElement("div");
        add.classList.add("add-to-cart");
        add.onclick = function() {
            addToCart(data[key].itemName, data[key].price);
        };        
        add.textContent = "Add to cart";

        // document.querySelectorAll('.add-to-cart').forEach(div => {
        //     div.onclick = () => {
        //         alert('Div clicked!');
        //     };
        // });

        const cateDiv = document.createElement("div");
        cateDiv.setAttribute("class", "itemCate");
        cateDiv.textContent = itemData.category;

        const priceDiv = document.createElement("div");
        priceDiv.setAttribute("id", "price");
        priceDiv.textContent = `$${itemData.price}`;

        // const desDiv = document.createElement("div");
        // desDiv.setAttribute("id", "description");

        itemDiv.appendChild(shadowDiv);
        itemDiv.appendChild(add);
        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(cateDiv);
        itemDiv.appendChild(priceDiv);


        itemGrid.appendChild(itemDiv);
        // itemDiv.appendChild(namePriceDiv);
        // namePriceDiv.appendChild(nameDiv);
        // namePriceDiv.appendChild(priceDiv);

        dropdown();
        filter();
        changeColor();
        applyStoredBackgroundColor();
        shoppingCart();
        // changeGrid();

        //study from https://editor.p5js.org/sobers/sketches/hrMPPNoC5

        let count = 0;
        let wiggle;

        // let textWiggle = itemData.itemName;
        let textWiggle = itemData.description;

        let font;

        let starsWiggle = [];
        let numStars = 100;

        let baseTextSize = 5;
        


        let drawCanvas = function (draw) {

            draw.preload = function(){
                font = draw.loadFont('assets/Rafaella.ttf');
            }


            draw.setup = function () {
                let canvas = draw.createCanvas(draw.windowWidth / 4.35, draw.windowWidth / 3.33);
                canvas.parent(itemDiv);
                canvas.position(0,0);

                draw.textSize(50);
                draw.textAlign(draw.CENTER, draw.CENTER);
                draw.textFont("aglet-mono-variable");
                draw.textWrap(draw.WORD);
                // draw.text(textWiggle, 100, 100, 100, 100);

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
            draw.textSize(dynamicTextSize * 2);
        } else {
            draw.textSize(dynamicTextSize * 2);
        }


        let wrapWidth = draw.width * 0.8; // 80% of canvas width

        // Wiggle effect for each line of text
        let lines = [];
        let currentLine = "";
        let words = textWiggle.split(/\s+/); // Split text into words
    
        words.forEach((word) => {
            let testLine = currentLine + word + " ";
            if (draw.textWidth(testLine) > wrapWidth) {
                lines.push(currentLine.trim());
                currentLine = word + " ";
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) lines.push(currentLine.trim()); // Add the last line
    
        // Calculate total text height
        let totalTextHeight = lines.length * dynamicTextSize * 3; // Line spacing
    
        // Start vertically centering
        let yOffset = (draw.height - totalTextHeight) / 2 + dynamicTextSize; // Start position for text
    
        // Draw each line with wiggle effect
        lines.forEach((line, index) => {
            drawWiggledText(line, wrapWidth, yOffset + index * dynamicTextSize * 3); // Line spacing
        });
    




        draw.push();

        for(let starWiggle of starsWiggle){
            draw.fill(255, 255, 255, draw.random(10, 255));
            draw.noStroke();
            let wiggle2 = draw.sin(draw.radians(count * starWiggle.wiggleFre)) * 10;
            draw.star(starWiggle.x  + wiggle2 / 2, starWiggle.y  + wiggle2, starWiggle.size1, starWiggle.size2, starWiggle.points);
        }

        draw.pop();

            };



            function drawWiggledText(line, wrapWidth, yOffset) {
                // Calculate the starting X position to center the line
                let totalTextWidth = draw.textWidth(line);
                let startX = (draw.width - totalTextWidth) / 2; // Center horizontally
            
                for (let i = 0; i < line.length; i++) {
                    let char = line[i];
            
                    // Unique wiggle offset for each letter
                    let frequencyOffset = i * 5; // Adjust for variation
                    let wiggle = draw.map(
                        draw.sin(draw.radians(count * 2 + frequencyOffset)),
                        -1,
                        1,
                        -5,
                        5
                    );
            
                    // Calculate individual letter position
                    let charX = startX + draw.textWidth(line.substring(0, i));
                    let charY = yOffset + wiggle;
            
                    // Draw each character
                    draw.text(char, charX, charY);
                }
            }





    //     let totalTextWidth = draw.textWidth(textWiggle);
    //     let startX = draw.width / 2 - totalTextWidth / 2;

        
    //     for (let i = 0; i < textWiggle.length; i++) {
    //         let char = textWiggle[i];

    //         // Unique wiggle offset for each letter
    //         let frequencyOffset = i * 10; // Adjust for variation
    //         let wiggle = draw.map(
    //             draw.sin(draw.radians(count * 2 + frequencyOffset)),
    //             -1,
    //             1,
    //             -5,
    //             5
    //         );

    //         // Calculate individual letter position
    //         let charX = startX + draw.textWidth(textWiggle.substring(0, i));
    //         let charY = draw.height / 2 + wiggle;

    //         // Draw each character
    //         draw.text(char, charX, charY);
    //     }
    // };

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
        draw.resizeCanvas(draw.windowWidth / 4.35, draw.windowWidth / 3.33);

    };
        };

    
        new p5(drawCanvas);
    
    }
});
}

function dropdown(){
    const cateButton = document.getElementById("cate");
    const cateOptions = document.getElementById("cate-content");

    let isToggled = true;

    cateButton.onclick = function (e) {
        if (isToggled) {
        cateOptions.style.visibility = "visible";
    }else{
        cateOptions.style.visibility = "hidden";
    }
    isToggled = !isToggled;

    };
};

function shoppingCart(){
    const cartButton = document.getElementById("cart");
    const cartBox = document.getElementById("cart-box");

    let isToggled = true;

    cartButton.onclick = function (e) {
        if (isToggled) {
        cartBox.style.visibility = "visible";
    }else{
        cartBox.style.visibility = "hidden";
    }
    isToggled = !isToggled;

    };
};

// function submitWindow(){
//     const submit = document.getElementById("submit");
//     const save = document.getElementById("push-data")

//     save.onclick = function (e) {
//         submit.style.display = "block";

//         setTimeout(function () {
//             submit.style.display = "none";
//         }, 2000);
//     };

// };

function filter(){
    const fashion = document.getElementById("c1");
    const music = document.getElementById("c2");
    const entertainment = document.getElementById("c3");
    const food = document.getElementById("c4");
    const sport = document.getElementById("c5");
    const technology = document.getElementById("c6");
    const others = document.getElementById("c7");

    const itemsFilter = document.querySelectorAll('.item');


    // let categoryContainer = document.getElementById("itemCate");

    // let category = categoryContainer.textContent;

    let isToggled = true;

    fashion.onclick = function (e){

        for(let itemFilter of itemsFilter){
            const categoryText = itemFilter.querySelector('.itemCate').textContent;

        if (isToggled) {
            // fashion.style.backgroundColor = "rgb(81, 64, 39)";
            if (categoryText.includes('Fashion')) {
                itemFilter.style.display = "block";
              } else {
                itemFilter.style.display = "none";
              }
        }else{
            // fashion.style.backgroundColor = "rgb(124, 98, 60)";
            itemFilter.style.display = "block";
        }
    };
    isToggled = !isToggled;
};

music.onclick = function (e){

    for(let itemFilter of itemsFilter){
        const categoryText = itemFilter.querySelector('.itemCate').textContent;

    if (isToggled) {
        // music.style.backgroundColor = "rgb(81, 64, 39)";
        if (categoryText.includes('Music')) {
            itemFilter.style.display = "block";
          } else {
            itemFilter.style.display = "none";
          }
    }else{
        // music.style.backgroundColor = "rgb(124, 98, 60)";
        itemFilter.style.display = "block";
    }
};
isToggled = !isToggled;
};

entertainment.onclick = function (e){

    for(let itemFilter of itemsFilter){
        const categoryText = itemFilter.querySelector('.itemCate').textContent;

    if (isToggled) {
        // entertainment.style.backgroundColor = "rgb(81, 64, 39)";
        if (categoryText.includes('Entertainment')) {
            itemFilter.style.display = "block";
          } else {
            itemFilter.style.display = "none";
          }
    }else{
        // entertainment.style.backgroundColor = "rgb(124, 98, 60)";
        itemFilter.style.display = "block";
    }
};
isToggled = !isToggled;
};

food.onclick = function (e){

    for(let itemFilter of itemsFilter){
        const categoryText = itemFilter.querySelector('.itemCate').textContent;

    if (isToggled) {
        // food.style.backgroundColor = "rgb(81, 64, 39)";
        if (categoryText.includes('Food')) {
            itemFilter.style.display = "block";
          } else {
            itemFilter.style.display = "none";
          }
    }else{
        // food.style.backgroundColor = "rgb(124, 98, 60)";
        itemFilter.style.display = "block";
    }
};
isToggled = !isToggled;
};

sport.onclick = function (e){

    for(let itemFilter of itemsFilter){
        const categoryText = itemFilter.querySelector('.itemCate').textContent;

    if (isToggled) {
        // sport.style.backgroundColor = "rgb(81, 64, 39)";
        if (categoryText.includes('Sport')) {
            itemFilter.style.display = "block";
          } else {
            itemFilter.style.display = "none";
          }
    }else{
        // sport.style.backgroundColor = "rgb(124, 98, 60)";
        itemFilter.style.display = "block";
    }
};
isToggled = !isToggled;
};

technology.onclick = function (e){

    for(let itemFilter of itemsFilter){
        const categoryText = itemFilter.querySelector('.itemCate').textContent;

    if (isToggled) {
        // technology.style.backgroundColor = "rgb(81, 64, 39)";
        if (categoryText.includes('Technology')) {
            itemFilter.style.display = "block";
          } else {
            itemFilter.style.display = "none";
          }
    }else{
        // technology.style.backgroundColor = "rgb(124, 98, 60)";
        itemFilter.style.display = "block";
    }
};
isToggled = !isToggled;
};

    others.onclick = function (e){


        for(let itemFilter of itemsFilter){
            const categoryText = itemFilter.querySelector('.itemCate').textContent;

        if (isToggled) {
            // others.style.backgroundColor = "rgb(81, 64, 39)";
            if (categoryText.includes('Others')) {
                itemFilter.style.display = "block";
              } else {
                itemFilter.style.display = "none";
              }
        }else{
            // others.style.backgroundColor = "rgb(124, 98, 60)";
            itemFilter.style.display = "block";
        }
};

isToggled = !isToggled;
};

};

let topButton = document.getElementById("scroll-to-top");

window.onscroll = function(){scroll()};

function scroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  function applyStoredBackgroundColor() {
    const color1 = document.getElementById("m3");
    // const color2 = document.getElementById("m2");
    const color3 = document.getElementById("m1");

    const b1 = document.getElementById("cate");
    const b2 = document.getElementById("home");
    const b3 = document.getElementById("addItem");
    const b4 = document.getElementById("about");
    const b5 = document.getElementById("cart");
    const b6 = document.getElementById("mode");
    const b7 = document.getElementById("scroll-to-top");

    const itemBack1 = document.querySelectorAll(".item");
    const itemBack2 = document.querySelectorAll(".itemShadow");

    const image = document.getElementById("tree");
    const imageBack = document.getElementById("layer");

    const code = document.getElementById("top");

    const box = document.getElementById("box");

    const itemCart = document.querySelectorAll(".add-to-cart");

    const cateContent = document.getElementById("cate-content");
    const contentOptions = document.querySelectorAll(".content-options");

    const cartBox = document.getElementById("cart-box");
    const cartLine = document.getElementById("cart-menu");
    const cartClear = document.getElementById("clear");

    
    const storedGrayscale = localStorage.getItem("filter");
    const storedColor = localStorage.getItem("backgroundColor");
    const storedShadow = localStorage.getItem("boxShadow");
    const storedColor2 = localStorage.getItem("backgroundColor2");
    const storedBorder = localStorage.getItem("border");
    const storedBorder2 = localStorage.getItem("border2");
    const storedBorder3 = localStorage.getItem("border3");
    const storedWidth = localStorage.getItem("width");
    const storedWidth2 = localStorage.getItem("width2");
    const storedHeight = localStorage.getItem("height");
    const storedHeight2 = localStorage.getItem("height2");
    const storedColor3 = localStorage.getItem("color2");
    const storedColor4 = localStorage.getItem("color");


    

    


    if (storedColor == "rgb(124, 98, 60)") {
    color1.style.border = storedBorder;
    color1.style.width = storedWidth;
    color1.style.height = storedHeight;


    color3.style.border = storedBorder2;
    color3.style.width = storedWidth2;
    color3.style.height =  storedHeight2;


    document.body.style.color = localStorage.getItem("color");

    b1.style.border = storedBorder;

    b2.style.border = storedBorder;
    b3.style.border = storedBorder;
    b4.style.border = storedBorder;
    b5.style.border = storedBorder;
    b6.style.border = storedBorder;
    b7.style.border = storedBorder;
    code.style.borderBottom = storedBorder;

    for(let cart of itemCart){
         cart.style.border = storedBorder;
    }


}

    // if (color2) {
    //     color2.style.border = storedBorder;
    //     color2.style.width = storedWidth;
    //     color2.style.height = storedHeight;

    //     color1.style.border = storedBorder2;
    //     color1.style.width = storedWidth2;
    //     color1.style.height =  storedHeight2;

    //     color3.style.border = storedBorder2;
    //     color3.style.width = storedWidth2;
    //     color3.style.height =  storedHeight2;


    //     document.body.style.color = storedColor4;

    // b1.style.border = storedBorder;

    // b2.style.border = storedBorder;
    // b3.style.border = storedBorder;
    // b4.style.border = storedBorder;
    // b5.style.border = storedBorder;
    // b6.style.border = storedBorder;
    // b7.style.border = storedBorder;
    // code.style.borderBottom = storedBorder;

    // for(let cart of itemCart){
    //      cart.style.border = storedBorder;
    // }

    // box.style.backgroundColor = storedColor4;
    // }


    if (storedColor == "white") {
    color3.style.border = storedBorder3;
    color3.style.width = storedWidth;
    color3.style.height = storedHeight;

    // color2.style.border = storedBorder2;
    // color2.style.width = storedWidth2;
    // color2.style.height =  storedHeight2;

    color1.style.border = storedBorder2;
    color1.style.width = storedWidth2;
    color1.style.height =  storedHeight2;

    document.body.style.color = storedColor3;

    b1.style.border = storedBorder3;

    b2.style.border = storedBorder3;
    b3.style.border = storedBorder3;
    b4.style.border = storedBorder3;
    b5.style.border = storedBorder3;
    b6.style.border = storedBorder3;
    b7.style.border = storedBorder3;

    cateContent.style.backgroundColor = storedColor;
    cateContent.style.border = storedBorder3;

    cartBox.style.backgroundColor = storedColor;
    cartBox.style.border = storedBorder3;

    cartLine.style.borderBottom = storedBorder3;

    cartClear.style.backgroundColor = storedColor;
    cartClear.style.border = storedBorder3;

    code.style.borderBottom = storedBorder3;


    for(let cart of itemCart){
         cart.style.border = storedBorder3;
    }


    for(let option of contentOptions){
        option.style.border = storedBorder3;
   }






}

    // if (storedShadow){


    //     for(let itemBack1each of itemBack1){
    //         itemBack1each.style.boxShadow = storedShadow;
    //     }
    // }

    // if(storedColor2){

    //     for(let itemBack1each of itemBack1){
    //         itemBack1each.style.backgroundColor = storedColor2;
    //     }

    //     for(let itemBack2each of itemBack2){
    //         itemBack2each.style.backgroundColor = storedColor2;
    //     }
    // }

    // if (storedGrayscale){
        
    //     image.style.filter = storedGrayscale;
    // }

    // console.log("Stored shadow:", storedShadow);
    console.log("Stored background color:", storedColor4);

    // if (color2) {
    //     color2.onclick = function () {
    //         const newShadow = "3px 3px 5px 0px rgb(50, 50, 50)";
    //         localStorage.setItem("boxShadow", newShadow);

    //         const storedColor2 = "rgb(15, 15, 15)";
    //         localStorage.setItem("backgroundColor", storedColor2);
            

    //         itemBack1.forEach(itemBack1each => {
    //             itemBack1each.style.backgroundColor = storedColor2;
    //             itemBack1each.style.boxShadow = newShadow;
    //         });
    //     };
    // }

    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
        b1.style.backgroundColor = storedColor;
        b2.style.backgroundColor = storedColor;
        b3.style.backgroundColor = storedColor;
        b4.style.backgroundColor = storedColor;
        b5.style.backgroundColor = storedColor;
        b6.style.backgroundColor = storedColor;
        b7.style.backgroundColor = storedColor;
        code.style.backgroundColor = storedColor;

        // image.style.filter = `grayscale${storedGrayscale}`;
        // imageBack.style.backgroundColor = storedColor;

        // for(let itemBack1each of itemBack1){
        //     itemBack1each.style.backgroundColor = storedColor2;
        //     itemBack1each.style.boxShadow = storedShadow;
        // }


        // for(let itemBack2each of itemBack2){
        //     itemBack2each.style.backgroundColor = storedColor;
        // }

        // localStorage.removeItem("backgroundColor");
    } else {
        console.log("No background color found in storage.");
    }
}

document.addEventListener("DOMContentLoaded", applyStoredBackgroundColor);

// function applyStoredBackgroundColor() {
//     const color1 = document.getElementById("m3");
//     const color2 = document.getElementById("m2");
//     const color3 = document.getElementById("m1");

//     const b1 = document.getElementById("cate");
//     const b2 = document.getElementById("home");
//     const b3 = document.getElementById("addItem");
//     const b4 = document.getElementById("about");
//     const b5 = document.getElementById("cart");
//     const b6 = document.getElementById("mode");
//     const b7 = document.getElementById("scroll-to-top");

//     const itemCart = document.querySelectorAll(".add-to-cart");

//     const storedBackgroundColor = localStorage.getItem("backgroundColor");
//     const storedBorder = localStorage.getItem("border");
//     const storedColor = localStorage.getItem("color");

//     if (storedBackgroundColor && storedBorder && storedColor) {
//         // Apply background and text color
//         document.body.style.backgroundColor = storedBackgroundColor;
//         document.body.style.color = storedColor;

//         // Set border and background for navigation buttons
//         const buttons = [b1, b2, b3, b4, b5, b6, b7];
//         buttons.forEach((btn) => {
//             if (btn) {
//                 btn.style.backgroundColor = storedBackgroundColor;
//                 btn.style.border = storedBorder;
//             }
//         });

//         // Ensure "scroll-to-top" has correct styles
//         if (b7) {
//             b7.style.backgroundColor = storedBackgroundColor;
//             b7.style.borderBottom = storedBorder;
//         }

//         // Update cart item borders
//         itemCart.forEach((cart) => {
//             if (cart) {
//                 cart.style.border = storedBorder;
//             }
//         });

//         // Update styles for color buttons
//         if (color1 && storedBackgroundColor === "rgb(124, 98, 60)") {
//             color1.style.border = storedBorder;
//             color1.style.width = localStorage.getItem("width");
//             color1.style.height = localStorage.getItem("height");
//         } else if (color2 && storedBackgroundColor === "white") {
//             color2.style.border = storedBorder;
//             color2.style.width = localStorage.getItem("width2");
//             color2.style.height = localStorage.getItem("height2");
//         }

//         console.log("Styles applied: Matched to stored background and text color.");
//     } else {
//         console.log("Stored styles are missing or incomplete.");
//     }
// }

// document.addEventListener("DOMContentLoaded", applyStoredBackgroundColor);








// function changeGrid() {
//     const gridSmall = document.getElementById("g1");
//     const gridLarge = document.getElementById("g2");

//     gridSmall.onclick = function (e) {
//         itemGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
//         itemGrid.style.paddingLeft = "0px";
//         itemGrid.style.paddingRight = "10px";

        
//         const gridItems = document.querySelectorAll("#itemGrid #item");

//         gridItems.forEach((item) => {
//             item.style.width = "18.3vw";
//             item.style.height = "23.3vw";
//         });
//     };

//     gridLarge.onclick = function (e) {

//         itemGrid.style.gridTemplateColumns = "repeat(3, 1fr)";

//         const gridItems = document.querySelectorAll("#itemGrid #item");

//         gridItems.forEach((item) => {
//             item.style.width = "25vw";
//             item.style.height = "30vw";
//         });
//     };
// }
