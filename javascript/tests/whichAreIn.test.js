const {whichAreIn} = require('../src/whichAreIn');

describe('whichAreIn', function () {
    it('should return correct array', function () {
        const testA1 = ["arp", "live", "strong"];
        const testA2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        const expected = ["arp", "live", "strong"];

        expect(whichAreIn(testA1, testA2)).toEqual(expected);
    });
})