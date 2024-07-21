const {pigLatin} = require('../src/pigLatin');

const testData1 = 'Pig latin is cool';
const testData2 = 'Hello world !';

describe('pigLatin', function () {
    it(`'${testData1}' should test simple text`, function () {
        expect(pigLatin(testData1)).toEqual('igPay atinlay siay oolcay');
    });

    it(`'${testData2}' should test special characters`, function () {
        expect(pigLatin(testData2)).toEqual('elloHay orldway !');
    });
});