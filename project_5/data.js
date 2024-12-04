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


