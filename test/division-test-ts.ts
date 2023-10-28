import { assert, expect } from "chai";
import { divide } from "../src/division-ts";

describe('divide(a, b)', () => {
    beforeEach(() => {
        expect(divide).to.be.a('function');
    })

    it('returns a result of 3', () => {
        const result = divide(6,2);
        expect(result).to.deep.equal(3);
    })

    it('returns a result of 10', () => {
        const result = divide(100,10);
        expect(result).to.equal(10);
    })

    it('returns NaN', () => {
        const result = divide(50,'apple');
        expect(result).to.equal(NaN);
    })

    it('returns null', () => {
        const result = divide(50, null);
        expect(result).to.equal(null);
    })

})