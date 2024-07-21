const {highestScoringWord} = require('../src/highestScoringWord');

describe('highestScoringWord', () => {
    it('should return highest scoring word', () => {
        const testData = 'hi i am Michal';
        const expected = 'michal';

        expect(highestScoringWord(testData)).toBe(expected);
    });

    it('should return empty string', () => {
        const testData = '';
        const expected = '';

        expect(highestScoringWord(testData)).toBe(expected);
    });
});