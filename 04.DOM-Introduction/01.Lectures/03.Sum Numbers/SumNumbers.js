function calc() {
    // TODO: sum = num1 + num2

    let numberOne  = document.getElementById("num1");
    let numberSecond  = document.getElementById("num2");

    let num1 = Number(numberOne.value);
    let num2 = Number(numberSecond.value);

    let sum = document.getElementById("sum");

    sum.value = num1 + num2;
}
