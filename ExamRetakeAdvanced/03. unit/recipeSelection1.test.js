const expect = require('chai').expect;
const recipeSelection = require(`./recipeSelection`);

describe("recipeSelection", function () {
    describe("isTypeSuitable", function () {
      it("should return 'This recipe is not suitable for vegetarians' for 'Meat' type and 'Vegetarian' dietary restriction", function () {
        const result = recipeSelection.isTypeSuitable("Meat", "Vegetarian");
        expect(result).to.equal("This recipe is not suitable for vegetarians");
      });
   
      it("should return 'This recipe is not suitable for vegans' for 'Meat' type and 'Vegan' dietary restriction", function () {
        const result = recipeSelection.isTypeSuitable("Meat", "Vegan");
        expect(result).to.equal("This recipe is not suitable for vegans");
      });
   
      // ... Other test cases for isTypeSuitable ...
      it("should return 'This recipe is suitable for your dietary restriction' for 'Fish' type and 'Pescetarian' dietary restriction", function () {
        const result = recipeSelection.isTypeSuitable("Fish", "Pescetarian");
        expect(result).to.equal("This recipe is suitable for your dietary restriction");
      });
   
      it("should throw 'Invalid input' error for non-string input parameters", function () {
        expect(() => recipeSelection.isTypeSuitable(123, "Vegetarian")).to.throw("Invalid input");
        expect(() => recipeSelection.isTypeSuitable("Meat", 123)).to.throw("Invalid input");
      });
    });
   
    describe("isItAffordable", function () {
      it("should return 'Recipe ingredients bought. You have 50$ left' for price 10 and budget 60", function () {
        const result = recipeSelection.isItAffordable(10, 60);
        expect(result).to.equal("Recipe ingredients bought. You have 50$ left");
      });
   
      it("should return 'You don't have enough budget to afford this recipe' for price 100 and budget 50", function () {
        const result = recipeSelection.isItAffordable(100, 50);
        expect(result).to.equal("You don't have enough budget to afford this recipe");
      });
   
      // ... Other test cases for isItAffordable ...
   
      it("should throw 'Invalid input' error for non-number input parameters", function () {
        expect(() => recipeSelection.isItAffordable("price", 60)).to.throw("Invalid input");
        expect(() => recipeSelection.isItAffordable(10, "budget")).to.throw("Invalid input");
      });
    });
   
    describe("getRecipesByCategory", function () {
      const recipes = [
        { title: "Spicy Tofu Stir-Fry", category: "Asian" },
        { title: "Veggie Pizza", category: "Italian" },
        { title: "Mango Salsa", category: "Mexican" },
        { title: "Vegan Curry", category: "Asian" },
      ];
   
      it("should return an array of recipe titles for the 'Asian' category", function () {
        const result = recipeSelection.getRecipesByCategory(recipes, "Asian");
        expect(result).to.deep.equal(["Spicy Tofu Stir-Fry", "Vegan Curry"]);
      });
   
      it("should return an empty array for the 'American' category (no recipes in this category)", function () {
        const result = recipeSelection.getRecipesByCategory(recipes, "American");
        expect(result).to.be.an("array").that.is.empty;
      });
   
      // ... Other test cases for getRecipesByCategory ...
   
      it("should throw 'Invalid input' error for invalid input parameters", function () {
        expect(() => recipeSelection.getRecipesByCategory("recipes", "Asian")).to.throw("Invalid input");
        expect(() => recipeSelection.getRecipesByCategory(recipes, 123)).to.throw("Invalid input");
      });
    });
  });