// Exploring Conditional Statements and Loops

const products = [
    {item: "Eggs", price: 3},
    {item: "Bread", price: 5},
    {item: "Cookies", price: 6},
    {item: "Milk", price: 4}
];

let isUserLoggedIn = false;

function checkLogin() {
    if (!isUserLoggedIn) {
        console.log("Please log in to add items to your cart.");
        return false;
    }
    return true;
}

function displayProducts() {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i].name} - $${products[i].price}`);
    }

    const choice = quantity(prompt("Enter the number of the product you want to add to cart (or enter 0 to finish shopping):"));
    if (choice === 0) {
        return;
    } else if (choice >= 1 && choice <= products.length) {
        if (checkLogin()) {
            const selectedProduct = products[choice - 1];
            cart.push(selectedProduct);
            console.log(`${selectedProduct.name} added to cart.`);
        }
    } else {
        console.log("Invalid choice. Please enter a number between 1 and " + products.length);
    }
    displayProducts();
}

function totalCost() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

function viewCart() {
    console.log("Items in your cart:");
    for (let i = 0; i < cart.length; i++) {
        console.log(`${i + 1}. ${cart[i].name} - $${cart[i].price}`);
    }
    console.log("Total cost: $" + totalCost());
}

const cart = [];
console.log("Welcome to Pepe's Online Grocery!");

isUserLoggedIn = confirm("Are you logged in?");

displayProducts();

viewCart();


//-------------------------------------------------------------------------------

// Exploring Functions in JavaScript

let balance = 0;


function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
}

function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn $${amount}.`);
    } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
    }
}

function checkBalance() {
    console.log(`Current Balance: $${balance}`);
}