const {onlyUnique} = require('../src/onlyUnique');

describe('onlyUnique', () => {
    it('should remove duplicate numbers', () => {
        const testData = [1, 2, 3, 4, 4, 1];
        const expected = [1, 2, 3, 4];

        expect(onlyUnique(testData)).toEqual(expected);
    });
});