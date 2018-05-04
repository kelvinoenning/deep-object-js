const { expect } = require('chai');
let deep = require('../index')

describe('index', () => {
    it('import get method', () => {
        expect(deep.get)
            .to.be.an('function')
    })
});