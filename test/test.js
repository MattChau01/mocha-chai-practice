// const chai = window.chai
// const expect = chai.expect

// describe('getCelcius', () => {
//   it('should convert farenheit to celcius for all values in an array', () => {
//     expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
//     expect(getCelcius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
//     expect(getCelcius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80])
//   })
// })

// const assert = require('assert');
import { assert } from "chai";
import { add } from "../src/app.js";
// const {add} = requre('../src/app')

describe('add function', () => {
    it('adds two numbers together', () => {
        const result = add(2, 2);
        assert.equal(result, 4);
    })
})