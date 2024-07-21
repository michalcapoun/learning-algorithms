const {duplicatesEverywhere} = require('../src/duplicatesEverywhere');

describe('duplicatesEverywhere', () => {
    it('should test normal input', () => {
        const testData = {"1": ["A", "B", "C"], "2": ["A", "B", "D", "A"]};
        const expected = {'1': ['C'], '2': ['A', 'B', 'D']};

        expect(duplicatesEverywhere(testData)).toEqual(expected);
    });
});