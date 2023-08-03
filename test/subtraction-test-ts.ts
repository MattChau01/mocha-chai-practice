// import { assert, expect, value } from "chai";
import { assert, expect } from "chai";
import {subtraction} from "../src/subtraction-ts";

describe('subtraction(a, b)', () => {
    beforeEach(() => {
        expect(subtraction).to.be.a('function');
    })

    // it('subtraction of two numbers (9, 5)', () => {
    //     const result = subtraction(9, 5);
    //     expect(result).to.deep.equal(4);
    // })


    // it('subtraction of two numbers (0, 10)', () => {
    //     const result = subtraction(0, 10);
    //     expect(result).to.equal('less than 0')
    // })

    // it('subtraction of two numbers (10, 10)', () => {
    //     const result = subtraction(10, 10);
    //     expect(result).to.equal(0)
    // })

})