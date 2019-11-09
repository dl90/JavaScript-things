const referenceOne = add;
referenceOne(3,7);

const referenceTwo = add;
referenceOne(3,6);

function add (num1, num2) {
    return num1 + num2; 
}

//adding a reference of a function on the second parameter.
//no diffeente to referenceOne or referenceTwo.
//addTwo is a higher order function, addRefernce is a callback function.
function addTwo (num1, addReference) {
    //2 is hardcoded
    return addReference( num1, 2);
}

addTwo(7, add);

//***Function declaration syntax (explicitly using the function keyworkd, naming it ...)
function callback (itemInList, index, array) {
    console.log(itemInList + " is at position: " + index);

    //new way of concat string  ***(string interperlation syntax)
    //dynamcially replace variable in ${variable}
    console.log(`${itemInList} is at position: ${index}`);
}

//***Function expression syntax
//***does not do hoisting***
//this style is prefered to avoid hoisting bugs
let callback1 = function (itemInList, index, array) {
    //some code
}

//annomous function function () {   }

//EcmaScript 6 functions (fat)arrowfunctions/lambda syntax
let callback2 = (itemInList, index, array) => {
    //some code
}

//if function is only one-line, can skip {}
let callback3 = (itemInList, index, array) => console.log();

//for each item in array, callback function is run.
//order matters in forEach.
[1,2,3].forEach(callback)

myForEach = (arr, callBackFunction) => {
    for(i = 0; i< arr.length; i++) {
        let item = callBackFunction(arr[i]);
        callBackFunction(item);
    }
};

myForEach([1,2,3], function(item) {
    console.log(item);
})


//annon callback function
const someCallBackFunctoin = () => {
    //some functionality
};

//myForEach1([1,2,3], someCallBackFunctoin)

//. vs .function()
//function vs method

// let someObj = {
//     someKey : someValue,
//     getFullName: function () { },
//     greet: function () { console.log("hello")}
// };

//console.log(someObj.someKey);
//console.log(someObj["someKey"]);



//wirting to a file
const fs = require("fs");
fs.writeFile("abc.txt","some data", function (err) {
    if(err) {
        console.err(err);
    }
    //anything past this point means file is written sucessfully
    console.log("file was written");
});

//readfile gives back binary
fs.readFile("abc.txt", function(err, data) {

});
