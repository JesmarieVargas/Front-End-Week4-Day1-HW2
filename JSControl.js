//Task 1: Implementing conditional statement to check if a user is logged in before allowing them to add items to cart

let isLoggedIn = true;
console.log("Is the user logged in true or false?:", isLoggedIn);

//Task 2: Using a loop to display the list of available products and adding functionality for users to add a product to the cart.


const products = [
    {name: "TV", price: "999.99"},
    {name: "PS4", price: "599.99"},
    {name: "VCR", price: "29.99"}
];
for (const product in products) {
    console.log("Products Available:", products[product]);
}

const cart = [];


addToCart();
function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        cart.push(product);
        console.log(`${product.name} has been added to the cart.`);
    } else {
        console.log("Product not found");
    }
}

//Task 3: Calculate the total cost of the items in the cart and display to the user.

addToCart("Headphones");
addToCart("VCR");
addToCart("TV");

console.log("Cart:", cart);

const prices = cart.map((product) => product.price)
const total = prices.reduce((acc, curr) => acc + curr.price)

const totalPrice = cart.reduce((acc, curr) => acc + curr.price, )

console.log("Total:", {total, totalPrice})

