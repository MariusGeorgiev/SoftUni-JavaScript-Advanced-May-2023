function sortingNumbers(arr) {

    arr.sort((a,b) => a-b);

    let firstArr = []
    let secondArr = []

    let saveLastNum = []

    if(arr.length % 2 !== 0) {
        let index = Math.floor(arr.length / 2)
        saveLastNum.push(arr[index])
        arr.splice(index, 1)
    }

    for(let i = 0; i < arr.length / 2; i++) {
        firstArr.push(arr[i]);
        secondArr.push(arr[arr.length / 2 + i]);
    }

    secondArr.reverse()

    let newArr = []

    for(let i = 0; i < firstArr.length; i++) {
        newArr.push(firstArr[i])
        newArr.push(secondArr[i])
    }

    if(saveLastNum.length >= 1) {
        newArr.push(saveLastNum[0])
    }

    return newArr;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 51]));