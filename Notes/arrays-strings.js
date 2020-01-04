const arr = [1, 2, 3, 4];
console.log(arr.concat("abc"));
console.log(arr);

const str = "123334";
console.log(arr.indexOf(3)); // only 1 element
console.log(str.indexOf(333));
console.log(str.padStart(10, 'a')); // first arg is desired str length
console.log(str.repeat(10));

// *** rest parameters ***
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));

let numbers = [5, 1, 7];
console.log(max(...numbers)); // spreads the array elements and calls the function for each element

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

let string = JSON.stringify({ squirrel: false, events: ["weekend"] }); // stringify turns obj to JSON string
console.log(string);
console.log(JSON.parse(string).events); // parse truns JSON string to obj values