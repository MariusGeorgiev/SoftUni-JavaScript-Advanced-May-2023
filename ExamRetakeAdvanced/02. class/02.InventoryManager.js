class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {


        if(quantity < 0 || quantity === 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        if(this.capacity < 1) {
            throw new Error('The inventory is already full.')
        }

        let item = this.items.find(i => i.itemName == itemName);

        if(item) {
            item.quantity += quantity;
            
        } 

        this.items.push({itemName, quantity});
        this.capacity -= 1

            return `Added ${quantity} ${itemName}(s) to the inventory.`

    }


    sellItem(itemName, quantity) {

        if(quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        let item = this.items.find(i => i.itemName == itemName);

        if(!item) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }
        if(quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        } 

        item.quantity = item.quantity - quantity;

            if(item.quantity === 0) {
                 // remove item from the array
               this.items = this.items.filter(i => i.itemName !== itemName);

               // add to outOfStock
                this.outOfStock.push({itemName});   
            }
            
            return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }


    restockItem(itemName, quantity) {

        if(quantity <= 0) {
            throw new Error("Quantity must be greater than zero.")
        }

        let item = this.items.find(i => i.itemName == itemName);
        let itemOutOf = this.outOfStock.find(i => i.itemName == itemName);
        

        if(item) {
            item.quantity += quantity 
        } else {
            this.items.push({itemName, quantity});
        }
        if(itemOutOf) { 
            //remove
            this.outOfStock = this.outOfStock.filter(i => i.itemName !== itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`

    }


    getInventorySummary() {

        let result = [];
        let outOf = [];
        this.items.map(e => result.push(`${e.itemName}: ${e.quantity}`))

        this.outOfStock.map(e => outOf.push(`${e.itemName}`))

        //let itemOutOf = this.outOfStock.find(i => i.itemName == itemName);

        if(this.outOfStock.length > 0) {
            return `Current Inventory:\n${result.join("\n")}\nOut of Stock: ${outOf.join(", ")}`

        } else {
            return `Current Inventory:\n${result.join("\n")}`
        }

    }

}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());





