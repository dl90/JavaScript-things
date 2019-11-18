// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//fizzBuzz(100);

function fizzBuzz(n) {
  let returnStr = "";

  for (let i = 1; i <= n; i ++) {
    if ( i % 15 === 0) {
      returnStr += "fizzbuzz\n"; 
      //console.log("fizzbuzz")
    } else if( i % 3 === 0) {
      returnStr += "fizz\n";
      //console.log("fizz");
    } else if ( i % 5 === 0) {
      returnStr += "buzz\n";
      //console.log("buzz")
    } else {
      returnStr += `${i}\n`;
      //console.log(i);
    }
  }
  console.log(returnStr);
  return returnStr;
}

module.exports = fizzBuzz;
