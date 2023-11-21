const expect = require('chai').expect;
const chooseYourCar = require(`./chooseYourCar`);

describe('ChooseYourCar Testing', () => {

    it('choosingType', () => {
        expect(() => { chooseYourCar.choosingType('Sedan', 'black', 1899) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Sedan', 'black', 2023) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Suv', 'black', 2000) }).to.throw('This type of car is not what you are looking for.');

        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal('This Sedan is too old for you, especially with that red color.');
    });

    it('brandName', () => {
        expect(() => { chooseYourCar.brandName("Mazda", 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], "1") }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 1) }).to.throw('Invalid Information!');
        // expect(() => { chooseYourCar.brandName(['Mazda'], 3.3) }).to.throw('Invalid Information!');
        // expect(() => { chooseYourCar.brandName(['Mazda'], -1) }).to.throw('Invalid Information!');

        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
    });

    it('carFuelConsumption', () => {
        expect(() => { chooseYourCar.carFuelConsumption("1", "1") }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption("1", 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(1, "1") }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(-1, 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(1, -1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(1, 0) }).to.throw('Invalid Information!');

        expect(chooseYourCar.carFuelConsumption(100, 7.00)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 6.90)).to.equal('The car is efficient enough, it burns 6.90 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 7.01)).to.equal('The car burns too much fuel - 7.01 liters!');
    });

})