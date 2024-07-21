const {bishop} = require('../src/bishop');

describe('bishop movement tests', () => {
    test('already at position', () => {
        expect(bishop('a1', 'a1', 0)).toBeTruthy();
    });

    test('0 moves allowed but different start and end position', () => {
        expect(bishop('a1', 'c3', 0)).toBeFalsy();
    });

    test('different square colors', () => {
        expect(bishop('a1', 'b2', 1)).toBeTruthy();
    });

    test('same diagonal, 1 move allowed', () => {
        expect(bishop('a1', 'c3', 1)).toBeTruthy();
    });

    test('different diagonal, 1 move allowed', () => {
        expect(bishop('a1', 'a2', 1)).toBeFalsy();
    });

    test('different diagonal, 2 moves allowed', () => {
        expect(bishop('a1', 'a3', 2)).toBeTruthy();
    });
});