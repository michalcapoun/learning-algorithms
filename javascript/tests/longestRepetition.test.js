const {longestRepetition} = require('../src/longestRepetition')

describe('longestRepetition', () => {
    it('should test normal string', () => {
        expect(longestRepetition("aaaabb")).toEqual(['a', 4])
    })

    it('should test empty string', () => {
        expect(longestRepetition("")).toEqual(['', 0])
    })
})