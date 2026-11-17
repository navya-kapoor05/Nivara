import { products} from "./products.js";

export function calculateInventoryValue(){
    return products.reduce((accumulator,product)=> accumulator+product.price,0);
}

export function calculateAvailableInventoryValue() {
    const availableProducts = products.filter(product => product.available);

    return availableProducts.reduce(
        (total, product) => total + product.price, 0
    );
}

export function calculateUnavailableInventoryValue(){
    const unavailableProducts = products.filter(product => !product.available);
    return unavailableProducts.reduce((total, product) => total + product.price, 0);
}