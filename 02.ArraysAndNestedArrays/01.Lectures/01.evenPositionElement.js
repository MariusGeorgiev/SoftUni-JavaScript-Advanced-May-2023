function evenPositionElement(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(" "));
}
evenPositionElement(["20", "30", "40", "50", "60"]);
evenPositionElement(["5", "10"]);
