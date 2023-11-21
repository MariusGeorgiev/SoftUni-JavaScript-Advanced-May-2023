const expect = require('chai').expect;
const weddingDay = require(`./weddingDay`);


describe('Wedding testing', () => {

    it('pickVenue', () => {
        expect(() => { weddingDay.pickVenue(150, 120, 'Plovdiv') }).to.throw('The location of this venue is not in the correct area!');

        expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
        expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
    });

    it('otherSpendings', () => {
        expect(() => { weddingDay.otherSpendings([], "", true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings("", [], true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings([], [], "") }).to.throw('Invalid Information!');

        expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
        expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal('You spend 2900$ for wedding decoration and photography!');
    });

    it('tableDistribution', () => {
        expect(() => { weddingDay.tableDistribution("", 1) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(1, "") }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(1, -1) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(1, 0) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(0, 1) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.tableDistribution(-1, 1) }).to.throw('Invalid Information!');

        expect(weddingDay.tableDistribution(4, 1)).to.equal('There is only 4 people on every table, you can join some tables.');
        expect(weddingDay.tableDistribution(60, 10)).to.equal('You have 10 tables with 6 guests on table.');
    });

});