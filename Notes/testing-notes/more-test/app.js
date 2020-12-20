/*

Returns the sum of the positive integers in the

range [0, upperBound].

*/

function sumOfPositiveInts (upperBound) {
    let sum = 0;

    if (upperBound >= 0) {
        for (i = 0; i <= upperBound; i++) {
            sum = sum + i;
        }
    }

    return sum;
}


//console.log(sumOfPositiveInts(3));