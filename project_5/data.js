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

    event.preventDefault();

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