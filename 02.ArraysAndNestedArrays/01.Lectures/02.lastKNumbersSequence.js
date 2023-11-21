function lastKNumbersSequence(n, k) {
  let newArr = [1];

  for (let i = 0; i < n - 1; i++) {
    if (newArr.length < k) {
      let currentSum = 0;
      for (let i = 0; i < newArr.length; i++) {
        currentSum += newArr[i];
      }
      newArr.push(currentSum);
    } else if (newArr.length >= k) {
      let newSlice = newArr.slice(-k);
      let newSum = 0;

      for (let i = 0; i < k; i++) {
        newSum += newSlice[i];
      }
      newArr.push(newSum);
    }
  }

  return newArr;
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
