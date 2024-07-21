const {stockProfit} = require('../src/stockProfit');

describe('stockProfit',  () => {
    it('should test multiple sells',  () => {
        expect(stockProfit([1, 2, 10, 3, 2, 7, 3, 2])).toBe(26);
    });

    it('should test single sell',  () => {
        expect(stockProfit([1, 6, 5, 10, 8, 7])).toBe(18);
    });

    it('should test no sell',  () => {
        expect(stockProfit([6, 5, 4, 3, 2, 1])).toBe(0);
    });
});