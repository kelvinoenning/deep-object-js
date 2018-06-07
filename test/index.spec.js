const { expect } = require('chai');
let deep = require('../index')

describe('index', () => {
    describe('get', () => {
        it('import', () => expect(deep.get).to.be.an('function'))
        it('should return correct value', () => {
            let obj = {
                a: 1,
                b: 2,
                c: [{ d: 3 }]
            }
            expect(deep.get(obj, 'c[0].d')).to.equal(3)
        })
    });
    describe('isObject', () => {
        it('import', () => expect(deep.isObject).to.be.an('function'));
    });
});