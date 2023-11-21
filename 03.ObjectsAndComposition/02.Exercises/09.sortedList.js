function createSortedList() {

    const instance = {

        numbersList: [],
        size: 0,

        // Main methods 
        add: function (element) {

            this.numbersList.push(element);
            this.numbersList.sort(this.comparor);
            this.size += 1;

            return instance;
        },

        remove: function (index) {
            this.validate(index);
            this.numbersList.splice(index, 1);
            this.size -= 1;

            return instance;
        },

        get: function (index) {
            this.validate(index);

            return this.numbersList[index];
        },
 
        // Helper methods
        validate: function (index) {
            if(index < 0 || index >= this.numbersList.length) {
                throw new Error("index is out of bounds");
            }
        },

        comparor: function (a, b) {
            return a - b;
        },
    };

    return instance;

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));