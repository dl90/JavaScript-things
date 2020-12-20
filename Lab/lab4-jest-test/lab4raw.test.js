const addTwo = require("./lab4raw").addTwo;
const add = require("./lab4raw").add;
const addd = require("./lab4raw").addd;
const subtract = require("./lab4raw").subtract;
const multiplyByTwo = require("./lab4raw").multiplyByTwo;
const multiplyy = require("./lab4raw").multiplyy;
const square = require("./lab4raw").square;
const isOdd = require("./lab4raw").isOdd;
const isNegative = require("./lab4raw").isNegative;
const positive = require("./lab4raw").positive;

test("adding 2 to argument", function () {

    expect(addTwo(0)).toBe(2);
    expect(addTwo(0)).not.toBe(3);

});

test("adds both arguments together", function () {

    expect(add(2, 3)).toBe(5);
    expect(add(2, -3)).not.toBe(5);

});

test("adds three arguments together", function () {

    expect(addd(1, 2, 3)).toBe(6);

});

test("subtracts second arg from first arg", function () {

    expect(subtract(2, 1)).toBe(1);
});

test("multiply arg by 2", function () {

    expect(multiplyByTwo(3)).toBe(6);
});

test("multiply all three args", function () {

    expect(multiplyy(2, 3, 4)).toBe(24);
});

test("squares input arg", function () {

    expect(square(4)).toBe(16);
});

test("returns true if arg is odd", function () {

    expect(isOdd(5)).toBe(true);
});

test("returns true if arg is less than 0", function () {

    expect(isNegative(1)).toBe(false);
});

test("returns abs value of int arg", function () {

    expect(positive(-3)).toBe(3);
});