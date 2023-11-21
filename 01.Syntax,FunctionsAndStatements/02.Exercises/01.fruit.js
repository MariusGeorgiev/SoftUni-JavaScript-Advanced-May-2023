function fruitProblem(fruit, weightInGrams, money) {
  const weightInKg = Number(weightInGrams) / 1000;
  const costPerKg = weightInKg * Number(money);

  console.log(`I need $${costPerKg.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruitProblem("orange", 2500, 1.8);
fruitProblem("apple", 1563, 2.35);
