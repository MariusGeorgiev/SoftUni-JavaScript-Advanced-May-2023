const expect = require('chai').expect;
const findNewApartment = require(`./findApartment`);

describe('Testing apartments object', () => {

    it('isGoodLocation', () => {
        expect(() => { findNewApartment.isGoodLocation('Sofia', 1) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isGoodLocation(1, true) }).to.throw('Invalid input!');

        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        expect(findNewApartment.isGoodLocation('Montana', true)).to.equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
    });

    it('isLargeEnough', () => {
        expect(() => { findNewApartment.isLargeEnough([], 1) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough(50, 50) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough([40, 50, 60], "50") }).to.throw('Invalid input!');

        expect(findNewApartment.isLargeEnough([40, 50, 52], 55)).to.equal('');
        expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
        expect(findNewApartment.isLargeEnough([70, 90, 100], 70)).to.equal('70, 90, 100');
    });

    it('isItAffordable', () => {
        expect(() => { findNewApartment.isItAffordable('1', 1) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(1, '1') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(0, 1) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(1, 0) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable('1', '1') }).to.throw('Invalid input!');

        expect(findNewApartment.isItAffordable(50000, 49000)).to.equal("You don't have enough money for this house!");
        expect(findNewApartment.isItAffordable(50000, 51000)).to.equal("You can afford this home!");
    });

});