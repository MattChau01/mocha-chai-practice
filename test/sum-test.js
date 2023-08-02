// importing assert from Chai
import { assert, expect } from "chai";
// import function `add` from app.js
import { add } from "../src/sum.js";

// describe('add function(2,2)', () => {
//     it('adds two numbers together', () => {
//         const result = add(2, 2);
//         assert.equal(result, 4);
//     })
// })

// describe('add function(4,11)', () => {
//     it('adds two numbers together', () => {
//         const result = add(4, 11);
//         assert.strictEqual(result, 15);
//     })
// })

describe('add(a, b)', () => {
    beforeEach(() => {
        expect(add).to.be.a('function');
    })

    it('adds two numbers together (2, 2)', () => {
        const result = add(2, 2);
        assert.equal(result, 4);
    })

    it('adds two numbers together (4, 11)', () => {
        const result = add(4, 11);
        assert.strictEqual(result, 15);
    })

    it('adds two numbers together (5, 1)', () => {
        const result = add(5, 1);
        assert.strictEqual(result, 6);
    })
})