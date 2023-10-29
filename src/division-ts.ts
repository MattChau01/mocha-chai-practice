// define a function that will divide two numbers


export function divide(a:any, b:any) {
    // return (a/b);

    // console.log(a.typeof)

    // TEST
    // if (a.typeof != Number || b.typeof != Number) {
    //     return NaN;
    // }

    // if (typeof a != Number )

    // if (typeof a !== 'number' || typeof b !== 'number') {
    //     return NaN;
    // }

    if (typeof a === 'number' && typeof b === 'number') {
        return (a/b);
    } else if (a === null || b === null) {
        return null;
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

}