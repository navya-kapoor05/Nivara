//Nivara Catalogue
 import { calculateInventoryValue , calculateAvailableInventoryValue, calculateUnavailableInventoryValue} from "./inventory.js";

 import {products} from "./products.js";

 import { addProduct, removeProduct, searchProducts, updateProductPrice, sortProductsByPrice } from "./productOperations.js";

import calculateFinalPrice from "./pricing.js";

const newProduct = {
    name : "Sofa",
    price: 2500,
    available: true
}
const newProduct2 = {
    name : "Velvet Curtains",
    price: 3500,
    available: true
}
addProduct(newProduct);
addProduct(newProduct2);
console.log(calculateFinalPrice(2500));
//removeProduct("Blue Bedsheets");
searchProducts("Blue bedsheets");
searchProducts("curtains");
searchProducts("BLINDS");
searchProducts("sofa");
updateProductPrice("Luxury Blinds", 4800);
addProduct({ name: "   ", price: 2000, available: true });
addProduct({ name: "Silk Curtains", price: "hello", available: true });
addProduct({ name: "Cotton Bedsheets", price: 2200, available: true });
addProduct();
console.log(products);
console.log(`Total Inventory Value: ₹${calculateInventoryValue()}`);
console.log(`Available Inventory Value: ₹${calculateAvailableInventoryValue()}`);
console.log(`Unavailable Inventory Value: ₹${calculateUnavailableInventoryValue()}`);
const sortedProducts = sortProductsByPrice();
sortedProducts.forEach(product => console.log(`Product: ${product.name} Price: ₹${product.price}`));