import { products } from "./products.js";

export function addProduct(product){
    if(!product || typeof product.name !== "string" || !product.name.trim() || !Number.isFinite(product.price) ||product.price<=0 || typeof product.available !== "boolean"){
        console.log("Invalid product details!");
        return;
    }
    products.push(product);
    console.log("Product added successfully!");
}

export function removeProduct(productName){
    const productIndex = products.findIndex(product => product.name === productName);
    if(productIndex !== -1){
        products.splice(productIndex,1);
        console.log("Product removed successfully!");
    }else{
        console.log("Product not found!");
    }
}

export function searchProducts(searchTerm){
    const results = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if(results.length > 0){
        results.forEach(product => { 
            if(product.available){
                console.log(`Product found: ${product.name} Price: ₹${product.price} (In Stock)`);
            }
            else{
                console.log(`Product found: ${product.name} Price: ₹${product.price} (Out of Stock)`);
            }
        });
    }else{
        console.log("No products found!");
    }
}

export function updateProductPrice(productName, newPrice){
    if(!Number.isFinite(newPrice) || newPrice <= 0){
        console.log("Invalid price!");
        return;
    }
    const productIndex = products.findIndex(product => product.name === productName);
    if(productIndex !== -1){
        products[productIndex].price = newPrice;
        console.log("Product price updated successfully!");
    }else{
        console.log("Product not found!");
    }
}

export function sortProductsByPrice(){
    return [...products].sort((a,b) => a.price - b.price);
}