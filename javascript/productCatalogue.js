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
