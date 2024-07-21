const {foldArray} = require('../src/foldArray');

describe('foldArray function', () => {
    it('folds the array 1 time', () => {
        const result = foldArray([1, 2, 3, 4, 5], 1);
        expect(result).toEqual([6, 6, 3]);
    });

    it('folds the array 2 times', () => {
        const result = foldArray([1, 2, 3, 4, 5], 2);
        expect(result).toEqual([9, 6]);
    });

    it('returns the same array when folding an array of length 1', () => {
        const result = foldArray([5], 2);
        expect(result).toEqual([5]);
    });

    it('folds an even-length array 1 time', () => {
        const result = foldArray([1, 2, 3, 4], 1);
        expect(result).toEqual([5, 5]);
    });
});