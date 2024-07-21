const {findUniqueNumber} = require('../src/findUniqueNumber');

describe('findUniqueNumber', () => {
    it('should return unique value', () => {
        const testData = [1, 2, 1, 1, 1];
        const expected = 2;

        expect(findUniqueNumber(testData)).toEqual(expected);
    });
});