const { expect } = require('chai');
let isObject = require('../src/isObject')

describe('isObject', () => {
    it('should return true', () => {
        let obj = {
            a: 1,
            b: 2,
            c: [{ d: 0 }]
        }
        expect(isObject(obj)).to.equal(true)
    })
    it('should return false', () => {
        expect(isObject(null)).to.equal(false)
        expect(isObject([])).to.equal(false)
        expect(isObject(Number())).to.equal(false)
        expect(isObject("")).to.equal(false)
        expect(isObject(true)).to.equal(false)
        expect(isObject(false)).to.equal(false)
        expect(isObject(Function)).to.equal(false)
    })
});