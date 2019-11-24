//count characters performance
const countChars = (str) =>  {
  let counter = 0; //assignment O(1)
  for(let i = 0; i < str.length; i++) {
    counter += 1; //linear depends on input length O(n)
  }

  //string
  const length = str.length; //O(1) constant time operation
  console.log(" .length " + length);

  //array
  let myList = [1,2,3];
  myList.push(4); //constant time O(1);

  myList.shift(); //removes first element from array
  myList.unshift(); //adds to the frist element of array

  /*
  lookup of array length is in constant time;
  operation carrying out .shift() is O(n)
  */

  myList.pop() //remove last item, no need to shift other items, constant time operation O(1)

  return counter; //O(1)
}

//console.log(countChars("abcdefg"));

const isUnique = (arr) => { // O(n^2)
  //const uniqueArr = [];
  let state = true;

  for( let i = 0; i < arr.length; i++) {
    console.log(`outer loop i = ${i}`);
    for (let j = 0; j < arr.length; j++ ) {
      console.log(`inner loop j = ${j}`);
      if( i !== j && arr[i] === arr[j]) {
        state = false;
      }
    }
  }
  return state;
}

//console.log(isUnique([1,2,3,4,5,5]));

const isUniqueObj = (arr) => { // O(n) ~breadcrumb method, caching~
  const cache = {}; //object uses more memory, but relatively inconsequential to conpute time
  let state = true;

  for( let i = 0; i < arr.length; i++ ) {
    console.log(`--outer loop == ${i}`);
    if (cache[arr[i]]) { //the property lookup of cache(object) is constant O(1)
      state = false;
    } else {
      cache[arr[i]] = true;
    }
  }
  return state;
}
// console.log(isUniqueObj([1,2,3,2,1,2,3,])); 