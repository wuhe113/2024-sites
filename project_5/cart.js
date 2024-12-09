function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productName, price) {
    const cart = getCart();
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // If product already in cart, increase its quantity
        existingProduct.quantity++;
    } else {
        // Otherwise, add it to the cart
        cart.push({ name: productName, price, quantity: 1 });
    }
    saveCart(cart);
    displayCart();
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    document.getElementById("cart").textContent = `Cart(${cartCount})`;
}

function displayCart() {
    const cart = getCart();
    const cartElement = document.getElementById('cart-menu');
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.innerHTML = '<li>Cart is empty</li>';
        return;
    }

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartElement.appendChild(listItem);
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// Initialize the cart display on page load
document.addEventListener('DOMContentLoaded', displayCart);