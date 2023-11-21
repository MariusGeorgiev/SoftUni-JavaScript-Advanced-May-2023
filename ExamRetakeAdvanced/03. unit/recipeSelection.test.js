const expect = require('chai').expect;
const recipeSelection = require(`./recipeSelection`);

describe(`Recipe testing`, () => {

    it('isTypeSuitable', () => {
        expect(() => { recipeSelection.isTypeSuitable("", 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isTypeSuitable(0, "") }).to.throw('Invalid input');
        expect(() => { recipeSelection.isTypeSuitable(0, 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isTypeSuitable([], 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isTypeSuitable([], []) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isTypeSuitable(0, []) }).to.throw('Invalid input');

        expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal('This recipe is not suitable for vegetarians');
        expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal('This recipe is not suitable for vegans');
        expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal('This recipe is not suitable for vegans');
        expect(recipeSelection.isTypeSuitable("Dairy", "Vegetarian")).to.equal('This recipe is suitable for your dietary restriction');
    });


    it('isItAffordable', () => {
        expect(() => { recipeSelection.isItAffordable("", "") }).to.throw('Invalid input');
        expect(() => { recipeSelection.isItAffordable(0, "") }).to.throw('Invalid input');
        expect(() => { recipeSelection.isItAffordable("", 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isItAffordable(0, []) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isItAffordable([], 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.isItAffordable([], []) }).to.throw('Invalid input');

        expect(recipeSelection.isItAffordable(1, 0)).to.equal("You don't have enough budget to afford this recipe");
        expect(recipeSelection.isItAffordable(1, -1)).to.equal("You don't have enough budget to afford this recipe");
        expect(recipeSelection.isItAffordable(100, 200)).to.equal("Recipe ingredients bought. You have 100$ left");
        expect(recipeSelection.isItAffordable(100, 100)).to.equal("Recipe ingredients bought. You have 0$ left");
    });



    it('getRecipesByCategory', () => {
        expect(() => { recipeSelection.getRecipesByCategory("", "") }).to.throw('Invalid input');
        expect(() => { recipeSelection.getRecipesByCategory(0, 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.getRecipesByCategory([], 0) }).to.throw('Invalid input');
        expect(() => { recipeSelection.getRecipesByCategory([], []) }).to.throw('Invalid input');
        expect(() => { recipeSelection.getRecipesByCategory(0, "") }).to.throw('Invalid input');

        const filtersR = [
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Veggie Pizza", category: "Italian" },
            { title: "Mango Salsa", category: "Mexican" },
            { title: "Vegan Curry", category: "Asian" },
          ];
       
       expect(recipeSelection.getRecipesByCategory(filtersR, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry", "Vegan Curry"]);

    });
})