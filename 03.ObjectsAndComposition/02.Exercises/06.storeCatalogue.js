function storeCatalogue(input) {
    const sortedInput = input.sort((a,b) => a.localeCompare(b));
    
    const dict = {};

    for(let i = 0; i < sortedInput.length; i++) {
        const element = sortedInput[i].split(" : ").join(": ");
        const firstLatter = element[0];
        
        if (dict[firstLatter] === undefined) {
         dict[firstLatter] = [];
        }
     dict[firstLatter].push(`  ${element}`);

    }

    let output = [];

    for(const key in dict) {
        const element = dict[key];
        output = [...output, key, ...element]
    }

    return output.join("\n");

}
console.log(storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]));

console.log("----------");
console.log(storeCatalogue(['Banana : 2', 'Rubic`s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']));
