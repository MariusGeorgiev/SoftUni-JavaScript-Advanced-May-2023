function calorieObject(arrOfStr) {

    const result = {};

    for(let i = 0; i < arrOfStr.length; i += 2) {

        const element = arrOfStr[i];

        result[arrOfStr[i]] = Number(arrOfStr[i+ 1]);
    }

    return result;

}
console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
console.log("-----------");
console.log(calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]));
