const {multiples} = require('../src/multiples');

describe('multiples', () => {
    it('test number with 15', function () {
        expect(multiples(16)).toBe(60);
    });

    it('test negative number', function () {
        expect(multiples(-5)).toBe(0);
    });

    it('test 0', function () {
        expect(multiples(0)).toBe(0);
    });
});