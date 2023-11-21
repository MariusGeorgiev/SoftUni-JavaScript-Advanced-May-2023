function aggregateElements(arr) {

    // Sum(ai) - calculates the sum of all elements from the input array
    //  Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    //  Concat(ai) - concatenates the string representations of all elements from the array
    
    let calculate = 0
    let calculateDividesNum = 0
    let concatenate = ""

    for (let i = 0; i < arr.length; i++) {

        calculate += arr[i]
        calculateDividesNum += 1 / arr[i]
        concatenate += arr[i]
    }

    console.log(calculate);
    console.log(calculateDividesNum);
    console.log(concatenate);

}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])