//Nivara Catalogue

const products =[
    {
        name: "Linen Curtains",
        price: 2500,
        available: true
    },
    {
        name: "Blue Bedsheets",
        price: 1800,
        available: false
    },
    {
        name: "Luxury Blinds",
        price: 4500,
        available: true
    },
    {
        name: "Designer Wallpapers",
        price: 1200,
        available: true
    },
    {
        name: "Premium Curtains",
        price: 3000,
        available: true
    }
];

const availableProducts = products.filter(product => product.available === true);
availableProducts.forEach(product => console.log(`${product.name} - ₹${product.price}`));

const totalValue = products.reduce((accumulator,product) => accumulator+product.price,0);
console.log(totalValue);

const availableInventoryValue = availableProducts.reduce((accumulator,product) => accumulator+product.price,0);
console.log(availableInventoryValue);

const unavailableProducts = products.filter(product => product.available === false);
console.log(unavailableProducts.length);

unavailableProducts.forEach(product => console.log(`${product.name} - ₹${product.price}`));

const searchTerm = "Bl";
const minBudget = 1000;
const maxBudget = 3000;

const searchResults = products.filter(product => (product.name.toLowerCase().includes(searchTerm.toLowerCase()) && (product.available && product.price >= minBudget && product.price <= maxBudget)));
if(searchResults.length > 0){

    searchResults.forEach(product => console.log(`Product found: ${product.name} Price: ₹${product.price}`));
}else{
    console.log("No products found!");
}
const curtainResults = products.filter(product => {
    if(product.name.toLowerCase().includes("curtains")){
        return true;
    }
    return false;
});

curtainResults.forEach(product => console.log(`${product.name} - ₹${product.price}`));

const sortedProducts = [...products].sort((a,b) => a.price - b.price);
sortedProducts.forEach(product => console.log(`${product.name} - ₹${product.price}`));

const productIndex = products.findIndex(product => product.name === "Sofa");
if(productIndex !== -1){
    products[productIndex].price = 2800;
    console.log(`${products[productIndex].name} - ₹${products[productIndex].price}`);
}
else{
    console.log(`Product not found!`);
}

const newProduct = {
    name : "Sofa",
    price: 2500,
    available: true
}
products.push(newProduct);
const newProduct2 = {
    name : "Velvet Curtains",
    price: 3500,
    available: true
}
products.push(newProduct2);
products.forEach(product => console.log(`${product.name} - ₹${product.price}`));
const productsIndex = products.findIndex(product => product.name === "Sofa");
if(productsIndex !== -1){
    products.splice(productsIndex,1);
    console.log("Product removed successfully!");
}
else{
    console.log("Product not found!");
}
products.forEach(product => console.log(`${product.name} - ₹${product.price}`));
console.log(`${products.length}`);

function calculateFinalPrice(price){
    return price+200;
}
console.log(calculateFinalPrice(2500));

function addProduct(product){
    if(!product || typeof product.name !== "string" || !product.name.trim() || !Number.isFinite(product.price) ||product.price<=0 || typeof product.available !== "boolean"){
        console.log("Invalid product details!");
        return;
    }
    products.push(product);
    console.log("Product added successfully!");
}

function removeProduct(productName){
    const productIndex = products.findIndex(product => product.name === productName);
    if(productIndex !== -1){
        products.splice(productIndex,1);
        console.log("Product removed successfully!");
    }else{
        console.log("Product not found!");
    }
}

removeProduct("Blue Bedsheets");
function searchProducts(searchTerm){
    const results = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) && product.available);
    if(results.length > 0){
        results.forEach(product => console.log(`Product found: ${product.name} Price: ₹${product.price}`));

    }
    else{
        console.log("No products found!");
    }
}
searchProducts("curtains");
searchProducts("BLINDS");
searchProducts("sofa");

function updateProductPrice(productName, newPrice){
    const productIndex = products.findIndex(product => product.name === productName);
    if(productIndex !== -1){
        products[productIndex].price = newPrice;
        console.log("Product price updated successfully!");
    }else{
        console.log("Product not found!");
    }
}
updateProductPrice("Luxury Blinds", 4800);
addProduct({ name: "   ", price: 2000, available: true });

addProduct({ name: "Silk Curtains", price: "hello", available: true });

addProduct({ name: "Cotton Bedsheets", price: 2200, available: true });

addProduct();

console.log(products);