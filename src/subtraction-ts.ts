// define a function that will subtract 2 values from each other

// export function subtraction(a:number, b:number) {
//     return a - b;
// }

export function subtraction(a:number, b:number) {
    if ((a - b) > 0) {
        return (a - b);
    } else if ((a - b) < (0)) {
        return ('less than 0');
    } else if ((a - b) === 0) {
        return 0
    }
}