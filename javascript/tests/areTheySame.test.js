const {comp} = require('../src/areTheySame');

describe('comp', () => {
    it('test true arrays', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11]
        const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

        expect(comp(a, b)).toBeTruthy();
    });

    it('test false arrays', () => {
        const a = [121, 144, 19, 161, 19, 144, 19, 11]
        const b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

        expect(comp(a, b)).toBeFalsy();
    });

    it('test empty array', () => {
        const a = []
        const b = []

        expect(comp(a, b)).toBeTruthy();
    });
});