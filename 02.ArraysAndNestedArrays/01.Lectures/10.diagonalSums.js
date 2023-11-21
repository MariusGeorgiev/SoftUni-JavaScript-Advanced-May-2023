function diagonalSums(matrix) {

    let innerArr = matrix[0];
    let sumMain = 0;
    let sumSecond = 0;
    let secondDiagonalIndex =innerArr.length - 1

    for(let i = 0; i < matrix.length; i++) {
        let mainDiagonalElement = matrix[i][i];
        let secondDiagonalElement = matrix[i][secondDiagonalIndex--];

        sumMain += mainDiagonalElement;
        sumSecond += secondDiagonalElement
    }
    console.log(`${sumMain} ${sumSecond}`);

}
diagonalSums([[20, 40], [10, 60]])
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])