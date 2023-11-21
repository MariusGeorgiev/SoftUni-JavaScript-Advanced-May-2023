function sumOfNumbersNM(n, m) {

    let num1 = Number(n)
    let num2 = Number(m)

    let result = 0

    for(let i = num1; i < num2 + 1; i++) {
        result += i
    }
    console.log(result);
    
}
sumOfNumbersNM('1', '5')
sumOfNumbersNM('-8', '20')