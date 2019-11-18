var obj = {}

const has = (value) => {
  if(value !== null && value !== undefined) {
    if(obj.value === undefined) {
      return false;
    } else {
      return true;
    }
  }
}

// console.log(has("abcd"));

const add = (value) => {
  if(value !== null && value !== undefined) {
    if(obj.value === undefined) {
      obj[value] = true;
    }
  }
  return obj;
}

add("ac");
add("abc");

const remove = function (value) {
  if(value !== null && value !== undefined) {
    // console.log(obj[value]);
    if(obj[value]) {
      delete obj[value];
    }
  }
  return obj;
};

// console.log(remove("abc"));

const clear = function () {
  return obj = {};
};

// clear();
// console.log(obj);

const size = function () {
  let counter = 0;
  const keyArr = Object.keys(obj);
  for(ele of keyArr) {
    counter += 1;
  }
  return counter.toString();
};

// console.log(size());

const value = () => {
  if (obj !== null && obj !== undefined ) {
    const keyArr = Object.keys(obj);
    return keyArr;
  }
}

// console.log(value());
const union = (someObj) => {
  let someObjArr = null;
  if( someObj !== null && someObj !== undefined) {
    someObjArr = Object.keys(someObj);
  }
  for (ele of someObjArr) {
    // console.log(ele);
    if(has(ele)) {
      continue;
    } else {
      add(ele);
    }
  }
  return obj;
}

const obj2 = {
  "abc":true,
  "def":true,
  "h":true
}
// union(obj2);
// console.log(union(obj2));

const intersect = (set) => {
  const allArr = [];
  let set1Arr = null;
  let set2Arr = null;
  const finalSet = {};

  if(set !== null && set !== undefined) {
    set2Arr = Object.keys(set);
  }
  set1Arr = Object.keys(obj);

  // console.log(set1Arr);
  // console.log(set2Arr);

  const set1ArrLength = set1Arr.length;
  const set2ArrLength = set2Arr.length;
  let length = null;

  if(set1ArrLength >= set2ArrLength) {
    length = set1ArrLength;
  } else {
    length = set2ArrLength;
  }

  // console.log(set1ArrLength);
  // console.log(set2ArrLength);
  // console.log(length);

  for (let i = 0; i < length; i++) {
    let comparatorA = null;
    let comparatorB = null;

    if(set1Arr[i] !== null && set1Arr[i] !== undefined) {
      comparatorA = set1Arr[i];
    } else {
      continue;
    }
    if(set2Arr[i] !== null && set2Arr[i] !== undefined) {
      comparatorB = set2Arr[i];
    } else {
      continue;
    }

    if( comparatorA === comparatorB) {
      allArr.push(comparatorA);
    } else {
      continue;
    }
  }

  // console.log(allArr);
  for(ele of allArr) {
    if(ele !== null && ele !== undefined) {
      if(finalSet.value === undefined) {
        finalSet[ele] = true;
      }
    }
  }
  
  return finalSet;
}

// console.log(intersect(obj2));
// console.log(obj);
// console.log(obj2);

const difference = (set) => {
  let set1Arr = null;
  let set2Arr = null;
  const allArr = [];

  if(set !== null && set !== undefined) {
    set2Arr = Object.keys(set);
  }
  set1Arr = Object.keys(obj);

  set1Arr.sort;
  set2Arr.sort;

  console.log(set1Arr);
  console.log(set2Arr);

  const set1ArrLength = set1Arr.length;
  const set2ArrLength = set2Arr.length;
  let length = null;

  if(set1ArrLength >= set2ArrLength) {
    length = set1ArrLength;
  } else {
    length = set2ArrLength;
  }

  console.log(length);

  for (let i = 0; i < length; i++) {
    let comparatorA = null;
    let comparatorB = null;

    if(set1Arr[i] !== null && set1Arr[i] !== undefined) {
      comparatorA = set1Arr[i];
    }

    if(set2Arr[i] !== null && set2Arr[i] !== undefined) {
      comparatorB = set2Arr[i];
    }

    console.log(comparatorA);
    console.log(comparatorB);

    if( comparatorA !== null && comparatorB !== null) {
      if( comparatorA !== comparatorB ) {
        allArr.push(comparatorA);
      }
    } else if (comparatorA === null || comparatorB === null ) {
      if(comparatorA === null) {
        allArr.push(comparatorB);
      } else if ( comparatorB === null) {
        allArr.push(comparatorA);
      }
    }
  }
  console.log(allArr);

}

difference(obj2);
