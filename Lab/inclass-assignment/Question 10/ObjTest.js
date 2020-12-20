// var obj = {}

// const has = (value) => {
//   if(value !== null && value !== undefined) {
//     if(obj.value === undefined) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// // console.log("Does it contain abcd:" + ` ${has("abcd")}`);

// const add = (value) => {
//   if(value !== null && value !== undefined) {
//     if(obj.value === undefined) {
//       obj[value] = true;
//     }
//   }
//   return obj;
// }

// // add("ac");
// // add("abc");

// const remove = function (value) {
//   if(value !== null && value !== undefined) {
//     // console.log(obj[value]);
//     if(obj[value]) {
//       delete obj[value];
//     }
//   }
//   return obj;
// };

// // console.log("remaing things in set: " + `${remove("abc")}`);
// // console.log(obj)

// const clear = function () {
//   return obj = {};
// };

// // clear();
// // console.log(obj);

// const size = function () {
//   let counter = 0;
//   const keyArr = Object.keys(obj);
//   for(ele of keyArr) {
//     counter += 1;
//   }
//   return counter.toString();
// };

// // console.log(size());

// const value = () => {
//   if (obj !== null && obj !== undefined ) {
//     const keyArr = Object.keys(obj);
//     return keyArr;
//   }
// }

///////////////////////////////////////////////////////   union
// const obj1 = {
//   "a":true,
//   "b":true,
//   "c":true,
//   "abc":true
// }
// const obj2 = {
//   "abc":true,
//   "def":true,
//   "h":true
// }

// const union = (objA, objB) => {
//   let someObjArr = null;
//   const obj1 = objA;
//   const obj2 = objB;

//   if( obj2 !== null && obj2 !== undefined) {
//     someObjArr = Object.keys(objB);
//   }

//   const has = (value) => {
//     if(value !== null && value !== undefined) {
//       if(obj1.value === undefined) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }

//   const add = (value) => {
//     if(value !== null && value !== undefined) {
//       if(obj1.value === undefined) {
//         obj1[value] = true;
//       }
//     }
//     return obj1;
//   }

//   for (ele of someObjArr) {
//     if(has(ele)) {
//       continue;
//     } else {
//       add(ele);
//     }
//   }
//   return obj1;
// }


// console.log(obj1);
// console.log(obj2);
// console.log()
// console.log(union(obj1, obj2));



// const obj1 = {
//   "a":true,
//   "b":true,
//   "c":true,
//   "abc":true
// }
// const obj2 = {
//   "abc":true,
//   "def":true,
//   "h":true,
//   "a":true
// }

// ///////////////////////////////////////////////////////////   intersect

// console.log(intersection(obj1, obj2));
// //does not work need to compare in a way similar to bubble sort
// function intersection(objA, objB) {
//   const allArr = [];
//   let set1Arr = null; //objA
//   let set2Arr = null; //objB
//   const finalSet = {};

//   if(objA !== null && objA !== undefined) {
//     set1Arr = Object.keys(objA);
//   }

//   if(objB !== null && objB !== undefined) {
//     set2Arr = Object.keys(objB);
//   }

//   //to set the length
//   const set1ArrLength = set1Arr.length; //objA
//   const set2ArrLength = set2Arr.length; //objB
//   let length = null;

//   //set the length according to the smaller array
//   if(set1ArrLength <= set2ArrLength) {
//     length = set1ArrLength;
//   } else {
//     length = set2ArrLength;
//   }

//   if(set1Arr.length === length) {
//     for(ele of set1Arr) {
//       if(set2Arr.includes(ele)) {
//         allArr.push(ele);
//       }
//     }
//   } else {
//     for(ele of set2Arr) {
//       if(set1Arr.includes(ele)) {
//         allArr.push(ele);
//       }
//     }
//   }

//   //creates object with same
//   for(ele of allArr) {
//     if(ele !== null && ele !== undefined) {
//       if(finalSet.value === undefined) {
//         finalSet[ele] = true;
//       }
//     }
//   }

//   return finalSet;
// };

// console.log(obj1);


// const intersect = (set) => {
//   const allArr = [];
//   let set1Arr = null;
//   let set2Arr = null;
//   const finalSet = {};

//   if(set !== null && set !== undefined) {
//     set2Arr = Object.keys(set);
//   }
//   set1Arr = Object.keys(obj);

//   // console.log(set1Arr);
//   // console.log(set2Arr);

//   const set1ArrLength = set1Arr.length;
//   const set2ArrLength = set2Arr.length;
//   let length = null;

//   if(set1ArrLength >= set2ArrLength) {
//     length = set1ArrLength;
//   } else {
//     length = set2ArrLength;
//   }

//   console.log(set1ArrLength);
//   console.log(set2ArrLength);
//   console.log(length);

//   for (let i = 0; i < length; i++) {
//     let comparatorA = null;
//     let comparatorB = null;

//     if(set1Arr[i] !== null && set1Arr[i] !== undefined) {
//       comparatorA = set1Arr[i];
//     } else {
//       continue;
//     }
//     if(set2Arr[i] !== null && set2Arr[i] !== undefined) {
//       comparatorB = set2Arr[i];
//     } else {
//       continue;
//     }

//     if( comparatorA === comparatorB) {
//       allArr.push(comparatorA);
//     } else {
//       continue;
//     }
//   }

//   // console.log(allArr);
//   for(ele of allArr) {
//     if(ele !== null && ele !== undefined) {
//       if(finalSet.value === undefined) {
//         finalSet[ele] = true;
//       }
//     }
//   }

//   return finalSet;
// }

// // console.log(intersect(obj2));
// // console.log(obj);
// // console.log(obj2);



//     //------------------------------------------------------------//

// const obj1 = {
//   "a":true,
//   "a":true,
//   "a":true,
//   "abc":true
// }
// const obj2 = {
//   "k":true,
//   "j":true,
//   "h":true,
//   "i":true
// }

// console.log(difference(obj1,obj2))

//     function difference (originalSet ,set) {
//       let set1Arr = null; //items
//       let set2Arr = null; //set
//       const allArr = [];
//       const finalSet = {};

//       if(originalSet !== null && originalSet !== undefined) {
//         set1Arr = Object.keys(originalSet);
//       }

//       if(set !== null && set !== undefined) {
//         set2Arr = Object.keys(set);
//       }

//       for(ele of set1Arr) {
//         if(!set2Arr.includes(ele)) {
//           allArr.push(ele);
//         }
//       }

//       for(ele of set2Arr) {
//         if(!set1Arr.includes(ele)) {
//           allArr.push(ele);
//         }
//       }

//       for(ele of allArr) {
//         if(ele !== null && ele !== undefined) {
//           if(finalSet.value === undefined) {
//             finalSet[ele] = true;
//           }
//         }
//       }

//       return finalSet;

//     };


//------------------------------------------------------------//

//   const obj1 = {
//     "1":true,
//     "2":true,
//     "3":true,
//     "4":true
//   }
//   const obj2 = {
//     "1":true,
//     "2":true,
//     "5":true
//   }

//   console.log(subset(obj1,obj2));

// function subset (originalSet, otherSet) {
//   let set1Arr = null; //originalSet
//   let set2Arr = null; //otherSet
//   const checkArr = [];

//   if(originalSet !== null && originalSet !== undefined) {
//     set1Arr = Object.keys(originalSet);
//   }

//   if(otherSet !== null && otherSet !== undefined) {
//     set2Arr = Object.keys(otherSet);
//   }

//   for(ele of set2Arr) {
//     if(set1Arr.includes(ele)) {
//       checkArr.push(ele);
//     }
//   }

//   if(checkArr.length === set2Arr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
const items = {};
console.log(add('1'));
console.log(add('1'));
console.log(add('b'));

function add (value) {
  if (value !== null && value !== undefined) {
    const setArr = Object.keys(items)

    if (setArr.includes(value)) {
      return false;
    } else if (items.value === undefined) {
      items[value] = true;
    }
  }
  return items
};