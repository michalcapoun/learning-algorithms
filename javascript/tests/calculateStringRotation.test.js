const {calculateStringRotation} = require('../src/calculateStringRotation');

const testData1 = ["coffee", "eecoff"];
const testData2 = ["moose", "Moose"];
const testData3 = ["isn't", "'tisn"];

describe('calculateStringRotation',  () => {
    it(`Shift "${testData1[0]}" by 2 to get "${testData1[1]}"`, () => {
        expect(calculateStringRotation(testData1[0], testData1[1])).toBe(2);
    });

    it(`"${testData2[0]}" and "${testData2[1]}" are not valid rotations (case-sensitive)`, () => {
        expect(calculateStringRotation(testData2[0], testData2[1])).toBe(-1);
    });

    it(`Shift "${testData3[0]}" by 2 to get "${testData3[1]}"`, () => {
        expect(calculateStringRotation(testData3[0], testData3[1])).toBe(2);
    });
});