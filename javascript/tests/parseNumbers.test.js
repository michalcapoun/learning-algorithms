const {parseNumbers} = require('../src/parseNumbers');

describe('parseNumbers', function () {
    it('should return correct output',  () => {
        const testData = "1,3-5,7";
        const expected = [1,3,4,5,7];

        expect(parseNumbers(testData)).toEqual(expected);
    });

    it('should return string wrong input type',  () => {
        const testData = [1,3-5,7];
        const expected = "Invalid argument type: object";

        expect(parseNumbers(testData)).toEqual(expected);
    });
});