function extractIncreasingSubsetFromArray(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;  
    const output = [];

    for(let i = 0; i < arr.length; i++) {
        const currElement = arr[i];

        if(currElement >= biggest) {
            output.push(currElement);
            biggest = currElement;
        }
    }

    return output;

}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsetFromArray([1, 2, 3, 4]);
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]);
