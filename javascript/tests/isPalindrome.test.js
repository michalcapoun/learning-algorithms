const {isPalindrome} = require('../src/isPalindrome');

describe('isPalindrome', () => {
    it('should return true', () => {
        const testData = "My Gym";

        expect(isPalindrome(testData)).toBeTruthy();
    });
})