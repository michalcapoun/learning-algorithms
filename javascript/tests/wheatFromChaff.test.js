const {wheatFromChaff} = require('../src/wheatFromChaff');

describe('wheatFromChaff', function () {
    it('Check medium length array', function () {
        const testData = [-31, -5, 11, -42, -22, -46, -4, -28];
        const expected = [-31, -5, -28, -42, -22, -46, -4, 11];

        expect(wheatFromChaff(testData)).toEqual(expected);
    });
});