function rotateArray(arr, num) {
    const collectionOfStr = [...arr];
    for(let i = 0; i < num; i++) {

        const lastNumber = collectionOfStr.pop();
        collectionOfStr.unshift(lastNumber);
    }
    console.log(collectionOfStr.join(" "));

}
rotateArray(['1', '2', '3', '4'], 2)
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)