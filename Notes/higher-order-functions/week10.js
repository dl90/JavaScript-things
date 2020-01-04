const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr2 = []
// for(let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]*2)
// }
// console.log(arr2);

// //####forEach####
// let newArr = [];

// let efg = arr.forEach( (ele, index, originArr) => {
//   //console.log(ele);
//   //console.log(index);
//   //console.log(originArr);
//   if(ele%2 === 0) {
//   newArr.push(ele)
//   } else if (index === 0) {
//     newArr.push(ele)
//   } 
// })
// console.log(newArr);


//####map####
// const arr2 = arr.map( (ele) => {
//   return ele * 2;
// })
// console.log(arr2);

// const arr3 = arr.map( ele => ele +10);
// console.log(arr3);

const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24 },
];
// const old = [];
// for(pers of persons) {
//   if(pers.age >16) {
//     old.push(pers);
//   }
// }
// console.log(old);

//####filter####
// const old = persons.filter(obj => obj.age > 16);
// console.log(old);

// const filteredArr = arr.filter(ele => ele > 4);
// console.log(filteredArr);

// let sum = 0;
// for(ele of arr) {
//   sum = sum + ele;
// }
// console.log(sum);

// #### reduce ####
const sum = arr.reduce((accumulator, currentvalue) => {
  console.log(accumulator);
  console.log(currentvalue);
  return accumulator + currentvalue
}, 0) //can add starting value for accumulator as second param, 
console.log(sum);
