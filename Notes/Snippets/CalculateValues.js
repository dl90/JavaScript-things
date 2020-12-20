const result = calculateValues(['1', '+', '500', '-', '251', '+', '50']);
console.log(result);

function calculateValues (arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = parseInt(arr[i]);

        if (isNaN(arr[i]) === true) {
            if (arr[i] === '+' || "+") {
                result = result + parseInt(arr[i + 1]);
                i = i + 2;
            }

            if (arr[i] === '-' || "-") {
                result = result - parseInt(arr[i + 1]);
                i = i + 2;
            }

        } else {
            if (i < arr.length) {
                result = result + currentNumber;
            }
        }
    }
    return result;
}