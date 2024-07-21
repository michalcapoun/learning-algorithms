const {uniqueInOrder} = require('../src/uniqueInOrder');

describe('uniqueInOrder', () => {
    test('should remove duplicate adjacent characters', () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    });

    test('should be case sensitive', () => {
        expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    });

    test('should work with number arrays', () => {
        expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    test('should return empty array if input is empty', () => {
        expect(uniqueInOrder('')).toEqual([]);
        expect(uniqueInOrder([])).toEqual([]);
    });
});
