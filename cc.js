function createInventoryItem(name, category, price) {
    return {
        name,
        category,
        price,
        describeItem() {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        }
    };
}

function addItemDiscount(inventoryItem, discountPercent) {
    return {
        ...inventoryItem,
        discountedPrice: inventoryItem.price - (inventoryItem.price * (discountPercent / 100)),
        applyDiscount() {
            console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
        }
    };
}