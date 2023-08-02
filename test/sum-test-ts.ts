// import { assert, expect, value } from "chai";

import { expect } from "chai";
import { add } from "../src/sum-ts";

// WITHOUT FUNCTION VALIDATION
// describe('add function (5,20)', () => {
//     it('adds two numbers together', () => {
//         const result = add(5, 20);
//         expect(result).to.deep.equal(25);
//     })

// })

// Verify that the exported function is truly defined as a function
describe('add(a,b)', () => {
    beforeEach(() => {
        expect(add).to.be.a('function');
    })

    it('adds two numbers together (5,20)', () => {
        const result = add(5,20);
        expect(result).to.deep.equal(25);
    })

    it('adds two numbers together (35,19)', () => {
        const result = add(35,19);
        expect(result).to.deep.equal(54);
    })
})