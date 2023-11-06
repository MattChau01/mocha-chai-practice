// define a function that will subtract 2 values from each other

// export function subtraction(a:number, b:number) {
//     return a - b;
// }

export function subtraction(a:any, b:any) {
    if ((a - b) > 0) {
        return (a - b);
    } else if ((a - b) === 0) {
        return 0;
    } else if (typeof a === 'string' || typeof b === 'string') {
        return NaN;
    } else if ((a - b) < 0) {
        return 'negative';
    }
}


// COMMENTING OUT FOR TEST ABOVE, BELOW IS ORIGINAL SOLUTION

// export function subtraction(a:number, b:number) {
//     if ((a - b) > 0) {
//         return (a - b);
//     } else if ((a - b) < (0)) {
//         return ('less than 0');
//     } else if ((a - b) === 0) {
//         return 0
//     }
// }