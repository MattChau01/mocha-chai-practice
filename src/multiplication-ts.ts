// define a function that will multiply two numbers

// export function multiply(a:number, b:number) {
//     return (
//         a*b
//     )
// } 

export function multiply(a:any, b:any) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return (undefined)
    } else {
        return a*b;
    }
};