function createInventoryItem(name, category, price) {
    return {
        name: name,
        category: category,
        price: price,
        describeItem: function () {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        }
    };
}

function addItemDiscount(inventoryItem, discountPercent) {
    inventoryItem.discountedPrice = inventoryItem.price - (inventoryItem.price * (discountPercent / 100));

    inventoryItem.applyDiscount = function () {
        console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
    };

    return inventoryItem;
}