const chai = require("chai");

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}

describe("sum function", function () {
  it("should sum integers correctly", function () {
    //Arrange
    let arr = [1, 20, -3];

    //Act
    let result = sum(arr);

    //Assert
    chai.expect(result).to.equal(18);

    it("should sum floating numbers correctly", function () {
      //Arrange
      let arr = [1.1, 2.2];

      //Act
      let result = sum(arr);

      //Assert
      chai.expect(result).to.be.approximately(3.3, 0.001);
    });
  });

  it("should cast strings to Number before summing", function () {
    //Arrange
    let arr = ['10', '23'];

    //Act
    let result = sum(arr);

    //Assert
    chai.expect(result).to.be.equal(33);
  });

  it("should cast strings to Number before summing", function () {
    //Arrange
    let arr = ["tw", "23"];

    //Act
    let result = sum(arr);

    //Assert
    chai.expect(result).to.be.NaN;
  });
});
