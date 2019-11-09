function truncateDecimals(anyNumber) {
    if (anyNumber = Number) {
        anyNumber = Math.trunc(anyNumber);
        return anyNumber;
    }
    else {return "Input not a number";
    }
}
var test1 = 123.32231;
truncateDecimals(test1);


function isEven(number) {
    var truncatedNumber = Math.trunc(number);
    if(number % 2 == 0) {
        return "even"
    } else {
        return "false"
    }
}

console.log(isEven(2222));

var a = 5;
var b = 4;
var c = -3;
var result = sumOfSquare(a,b,c);
console.log(result);

function square(num) {
    return num * num;
}

function sumOfSquare(a,b,c) {
    var xx = square(a);
    var yy = square(b);
    var zz = square(c);

    return xx + yy + zz;
}


// Scope
var a = 4;

function abc () {
if(a >0) {
    console.log(a);
}
console.log(a);

}

if (true) {
    var bar = "hello"
}
console.log(bar);