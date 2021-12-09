const { expect } = require('chai')
var index = require('../index')

describe("Temperature Converter", function() {
    it("converts farenheit to celius", function() {
        var celsiusVal = index.convertToCel(32)
        expect(celsiusVal).to.equal(0)

        celsiusVal = index.convertToCel(98.6)
        expect(celsiusVal).to.equal(37)
    })

    it("converts celsius to farenheit", function() {
        var celsiusVal = index.convertToFar(0)
        expect(celsiusVal).to.equal(32)

        celsiusVal = index.convertToFar(37)
        expect(celsiusVal).to.equal(98.6)
    })
})