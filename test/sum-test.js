// importing assert from Chai
import { assert } from "chai";
// import function `add` from app.js
import { add } from "../src/sum.js";

describe('add function(2,2)', () => {
    it('adds two numbers together', () => {
        const result = add(2, 2);
        assert.equal(result, 4);
    })
})

describe('add function(4,11)', () => {
    it('adds two numbers together', () => {
        const result = add(4, 11);
        assert.strictEqual(result, 15);
    })
})