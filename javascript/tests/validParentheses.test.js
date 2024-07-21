const {validParentheses} = require('../src/validParentheses');

const testData1 = "()";
const testData2 = ")(()))";
const testData3 = "(";
const testData4 = "(())((()())())";
const testData5 = "";

describe ('validParentheses', () => {
    it(`"${testData1}" returns true`, () => {
        expect(validParentheses(testData1)).toBeTruthy();
    });

    it(`"${testData2}" returns false`, () => {
        expect(validParentheses(testData2)).toBeFalsy();
    });

    it(`"${testData3}" returns false`, () => {
        expect(validParentheses(testData3)).toBeFalsy();
    });

    it(`"${testData4}" returns true`, () => {
        expect(validParentheses(testData4)).toBeTruthy();
    });

    it(`"${testData5}" returns true`, () => {
        expect(validParentheses(testData5)).toBeTruthy();
    });
});