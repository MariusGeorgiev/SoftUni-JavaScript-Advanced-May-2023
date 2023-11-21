const expect = require('chai').expect;
const rgbToHexColor = require('./06.rgbToHex');

describe('rgbToHex', function () {
    it('with non integer red, should return undefined', function() {

        // Arrange
        let red1 = 12.5;
        let red2 = "100";
        let green = 100;
        let blue = 100;

        // Act
        let result1 = rgbToHexColor(red1, green, blue);
        let result2 = rgbToHexColor(red2, green, blue);

        // Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;

    }) 

    
})