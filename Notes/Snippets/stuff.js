function filterNames(arrName) {
    let newArr = [];

    for (let i = 0; i < arrName.length; i++) {
        let currentItem = arr[i];
        if (currentItem.length >= 4) {
            newArr.push(currentItem);
        }
    }

    /*
    for (let i = 0; arrName.length; i++) {
        if (arr[i].lenvth >= 4) {
            newArr.push(arr[i]);
        }
    }

    for (const element of arrName) {
        if (element.length >= 4) {
            newArr.push(element);
        }
    }

    */
    return newArr;
}

function getNumberOfEvens(numArr) {
    let evenNum = 0;

    for (let i = 0; i < numArr.length; i++) {
        if (Number(arr[i]) && (arr[i] % 2 == o)) {
            num += 1;
        }
    }

    return evenNum;
}

function makeHistogram(arrString) {
    let obj = {};

    for (let i = 0; i < arrString.length; i++) {
        let stringInArray = arrString[i];
        if (obj[stringInArray] === undefined) {
            //add to obj and assigns 1 value;
            obj[arrString[i]] = 1;
        } else {
            obj[arrString[i]] = obj[arrString[i]] + 1;
        }
    }
    return obj;
}

console.log(makeHistogram(["bob", "jim", "bob"]));



//turns string to arr
// const stringToArr = (str) => {

//   let iterator = str[Symbol.iterator]();
//   let theChar = iterator.next();
//   const strArr = []

//   //iterator through string and add to strArr
//   while(!theChar.done && theChar.value !== '') {
//       strArr.push(theChar.value);
//       theChar = iterator.next();
//   }
//   return strArr;
// }
// let test = stringToArr("abcdefgh   ");
// console.log(test);
