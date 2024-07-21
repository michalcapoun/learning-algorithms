const {findOdd} = require('../src/findOdd');

test('Array with single element [7] should return 7', () => {
    expect(findOdd([7])).toBe(7);
});

test('Array with single element [0] should return 0', () => {
    expect(findOdd([0])).toBe(0);
});

test('Array with elements [1, 1, 2] should return 2', () => {
    expect(findOdd([1, 1, 2])).toBe(2);
});

test('Array with elements [0, 1, 0, 1, 0] should return 0', () => {
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0);
});

test('Array with elements [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4', () => {
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
});