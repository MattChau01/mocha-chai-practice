// import { assert, expect, value } from "chai";
import { assert, expect } from "chai";
import {multiply} from "../src/multiplication-ts";

describe('multiply(a, b)', () => {
    beforeEach(() => {
        expect(multiply).to.be.a('function');
    })

    // it('multiplies two numbers (6,5)', () => {
    //     const result = multiply(6,5);
    //     expect(result).to.deep.equal(30);
    // })

    // it('multiplies two numbers (10,5)', () => {
    //     const result = multiply(10,5);
    //     expect(result).to.deep.equal(50);
    // })

    // it('multiplies two numbers (5,9)', () => {
    //     const result = multiply(5,9);
    //     expect(result).to.deep.equal(45);
    // })

    // it('if a value is not a number, return `undefined`', () => {
    //     let a:string;
    //     a='apple';
    //     let b:number;
    //     b=11;

    //     const result = multiply(a,b);
    //     if (typeof a !== 'number' || typeof b !== 'number') {
    //         expect(result).to.equal(undefined)
    //     }

    // })

})