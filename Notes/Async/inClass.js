//Take a moment to write out your forEach implementation
// assume the first argument to your function is an array


//create a function called multiplier which takes 3 arguments:
// number1
// number2
// callback

// callback contains 2 paramets
// error
// result

// number1 and number2 must be Integers. If decimals are passed, convert them

// if the user passes in for number1 or number2 something which IS NOT a
// number, pass an Error to the first argument, and leave result empty. 

// Otherwise, multiply the two numbers together and pass null for the error,
// result as the second argument. 

// Wrap all of this in a setTimeout which will execute after 4 seconds.

let myCallback = (err, result) => {
    if (err) {
        console.log(err.message);
    } else {
    console.log(result);
    }
};

let multipler = (num1, num2, myCallback) => {
    setTimeout(() => {
        let result = parseInt(num1) * parseInt(num2);
        myCallback(null,result);
    }, 4000);

    if(parseFloat(num1).toString().includes(".")) {
        num1 = Math.round(num1);
    }

    if(parseFloat(num2).toString().includes(".")) {
        num2 = Math.round(num2);
    }

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        myCallback(new Error("Not an int"), null);
    } else {
        result = num1 * num2;
        myCallback(null, result);
    }
}

multipler(1, 5, myCallback);
setTimeout (() => {
    multipler(1, 10, myCallback)
}, 1000);