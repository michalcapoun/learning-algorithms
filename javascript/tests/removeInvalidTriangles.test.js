const {removeInvalidTriangles} = require('../src/removeInvalidTriangles.js');

describe('removeInvalidTriangles', () => {
    it('should remove invalid triangles', () => {
        const testData = [
            [1, 2, 3],
            [2, 3, 4],
            [4, 5, 6]
        ];

        const expected = [
            [2, 3, 4],
            [4, 5, 6]
        ];

        expect(removeInvalidTriangles(testData)).toEqual(expected);
    });

    it('should return empty array', () => {
        const testData = [
            [1, 2, 3],
            [0, 5, 7],
            [2, 2, 5]
        ]

        expect(removeInvalidTriangles(testData)).toEqual([]);
    });
});