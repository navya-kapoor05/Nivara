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
