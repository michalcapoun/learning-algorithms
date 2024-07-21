const {sortTowels} = require('../src/sortTowels');

describe('sortTowels', () => {
    it('test sort after one week', () => {
        const pile = ["blue", "red", "blue", "red", "blue"];
        const weeklyUse = [3];
        const expected = ["blue", "red", "red", "blue", "blue"];

        expect(sortTowels(pile, weeklyUse)).toEqual(expected);
    });

    it('test sort after three weeks', () => {
        const pile = ["blue", "blue", "blue", "blue", "red"];
        const weeklyUse = [2, 0, 3];
        const expected = ["blue", "blue", "red", "blue", "blue"];

        expect(sortTowels(pile, weeklyUse)).toEqual(expected);
    });

    it('test sort with empty array', () => {
        const pile = [];
        const weeklyUse = [0, 4, 1];
        const expected = [];

        expect(sortTowels(pile, weeklyUse)).toEqual(expected);
    });
});