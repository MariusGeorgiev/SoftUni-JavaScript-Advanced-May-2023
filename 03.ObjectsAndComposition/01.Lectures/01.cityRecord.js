function cityRecord(name, numberOfPeople , treasury) {

    let obj = {
        name,
        population: numberOfPeople,
        treasury
    };

    return obj;

}
console.log(cityRecord("Tortuga", 7000, 15000));
console.log("---------");
console.log(cityRecord("Santo Domingo", 12000, 23500));
