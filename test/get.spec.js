const { expect } = require('chai');
const { _mountPathList, get } = require('../src/get')

const ERROR_PATH = 'path is not a string';

describe('Get', () => {
    let obj = {
        a: 1,
        b: 2,
        c: {
            cc1: 3,
            cc2: 4,
            cc3: [
                {
                    cc31: 5
                },
                {
                    cc32: 6
                }
            ]
        }
    }
    const PATH = 'c.cc3[0].cc31'
    const PATH_LIST = ['c', 'cc3', '0', 'cc31']


    describe('_mountPathList', () => {

        const _testMountPathListError = path => {
            expect(() => _mountPathList(path))
                .to.throw()
                .and.have.property('message', ERROR_PATH)
        }

        it('should return correct value', () => {
            expect(_mountPathList(PATH))
                .to.deep.equal(PATH_LIST)
        });
        it('should throw error when path is undefined', () => {
            _testMountPathListError();
        });
        it('should throw error when path is null', () => {
            _testMountPathListError(null);
        });
        it('should throw error when path is not a string', () => {
            _testMountPathListError(2);
        });
    });

    describe('get', () => {
        it('should return correct value when def is not defined', () => {
            expect(get(obj, PATH))
                .to.equal(obj.c.cc3[0].cc31)
        })
        it('should return correct value when def is defined', () => {
            let defaultValue = 'default'
            expect(get(obj, 'fakePath', defaultValue)).to.equal(defaultValue)
            expect(get(obj, 'fakePath', '')).to.equal('')
            expect(get(obj, 'fakePath', 0)).to.equal(0)
            expect(get(obj, 'fakePath', null)).to.equal(null)
            expect(get(obj, 'fakePath', undefined)).to.equal(undefined)
        })
        it('should return undefined when error and def is not defined', () => {
            expect(get('fakeObject', PATH)).to.equal(undefined)
        })
        it('should return correct value when error and def is defined', () => {
            let defaultValue = 'default'
            expect(get(null, 'fakePath', defaultValue)).to.equal(defaultValue)
            expect(get(undefined, 'fakePath', defaultValue)).to.equal(defaultValue)
            expect(get('fakeObject', PATH, defaultValue)).to.equal(defaultValue)
        })
    });
});