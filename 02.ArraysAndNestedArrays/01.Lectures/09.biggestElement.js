function biggestElement(arr) {

    let saveAllDigits = []

    for(let i = 0; i < arr.length; i++) {

        let newArrays = arr[i];

        for(let j = 0; j < newArrays.length; j++) {

            saveAllDigits.push(newArrays[j])
        }
    }
    let max = Math.max(...saveAllDigits)

    console.log(max);

}
biggestElement([
[20, 50, 10],
[8, 33, 145]
])
console.log("------------");
biggestElement([
[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]
])