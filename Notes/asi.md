# ASI (auto semicolon insertion)

https://medium.com/javascript-in-plain-english/automatic-semicolon-insertion-asi-in-javascript-made-simple-19c48d179494

automatically inserts semicolon as needed when JavaScript code is parsed

but does not detect some situations where semicolons are needed

3 main rules of ASI:

  1. When, as the source text is parsed from left to right, a token (called the offending token) is encountered that is not allowed by any production of the grammar, then a semicolon is automatically inserted before the offending token if one or more of the following conditions is true:

      - The offending token is separated from the previous token by at least one LineTerminator
      - The offending token is }
      - The previous token is ) and the inserted semicolon would then be parsed as the terminating semicolon of a do-while statement

  1. When, as the source text is parsed from left to right, the end of the input stream of tokens is encountered and the parser is unable to parse the input token stream as a single instance of the goal nonterminal, then a semicolon is automatically inserted at the end of the input stream.

  1. When a “restricted production” (return, break, continue, throw and ++ and -- postfix operators) is encountered and contains a line terminator in a place where the grammar contains the annotation, then a semicolon is inserted.

## tldr

- avoid staring new lines with () or [] which may be confused with function calls or array refs. If not possible, add a semicolon before it
- watchout for "restricted production" keywords and operators. ASI inserts semicolons if theres a new line

### Part 1

Below are some cases where semicolons are needed

```js
// EXAMPLE_1
  const sum = 5 + 5
  (sum).toFixed(3)

  // Is interpreted as:
  const sum = 5 + 5(sum).toFixed(3);
  // ReferenceError: Cannot access 'sum' before initialization
  // JavaScript parser assumes that what we want to do is a function call
  // 5(sum), calling function 5 with parameter sum

  // FIX:
  const sum = 5 + 5;
  (sum).toFixed(3)

  // Is interpreted as:
  const sum = 5 + 5;
  sum.toFixed(3);


// EXAMPLE_2
  const mishmash = 13 + 'world'
  [13].length
  // TypeError: Cannot read property 'length' of undefined

  // Is interpreted as:
  const mishmash = 13 + 'world'[13].length;
  // JavaScript parser basically assumes that we want to know the length of character on 12th index

  // FIX:
  const mishmash = 13 + 'world';
  [13].length

  // Is interpreted as:
  const mishmash = 13 + 'world';
  [13].length;


// EXAMPLE_3
  const mishmash = 13 + 'world'
  ([13].length)
  // TypeError: "world" is not a function

  // Is interpreted as:
  const mishmash = 13 + 'world'([13].length)

  // FIX:
  const mishmash = 13 + 'world';
  ([13].length)

  // Is interpreted as:
  const mishmash = 13 + 'world';
  ([13].length);
```

### Part 2

Before closing bracket if it encounters it where it is not allowed by rules grammar

```js
// This is not valid, but ASI will intervene nonetheless
  { 0
   2 } 8

// Is interpreted as:
  { 0;
    2; } 8;

// Or
  { foo: 'barr' }

// Is interpreted as:
  { foo: 'barr'; }
```

### Part 3

JavaScript parses reaches the end of the file

```js
// EXAMPLE
  const word = 'Hello'
  const date = new Date().getFullYear()
  console.log(`${word} from ${date}.`)
// EOF

// Is interpreted as:
  const word = 'Hello';
  const date = new Date().getFullYear();
  console.log(`${word} from ${date}.`);
// EOF
```

### Part 4

[return, break, continue, throw, ++, --] followed by a line break

```js
// EXAMPLE_1
  function sayHi() {
    return
    'Hello!'
  }

  // Is interpreted as:
  function sayHi() {
    return; // <= semicolon after return statement
    'Hello!';
  }
  // NOTE: JavaScript assumes end of line is also end of the statement

  // FIX:
  function sayHi() {
    return 'Hello!'
  }
  // OR (not recommended)
  function sayHi() {
    return (
      'Hello!'
    )
  }

  // Both are interpreted as:
  function sayHi() {
    return 'Hello!';
  }


// EXAMPLE_2
  function returnObj() {
    return
    {
      name: 'John'
    }
  }

  // Is interpreted as:
  function returnObj() {
    return; // <= semicolon after return statement
    {
      name: 'John';
    }
  }

  // FIX:
  function returnObj() {
    return {
      name: 'John'
    }; // <= New end of return statement
  }
  // OR (not recommended)
  function returnObj() {
    return (
      {
        name: 'John'
      }
    )
  }

  // Both are interpreted as:
  function returnObj() {
    return {
      name: 'John'
    }; // <= New end of return statement
  }


// EXAMPLE_3
  for (let idx = 6; idx > 0; idx--) {
    if (idx % 2 !== 0) {
      break
    }
  }

  // Is interpreted as:
  for (let idx = 6; idx > 0; idx--) {
    if (idx % 2 !== 0) {
      break; // <= semicolon after break statement
    }
  }

// EXAMPLE_4
  let x = 5
  while (x > 0) {
    x--
    if (x % 2 === 0) {
      continue
    }
    console.log(x)
  }

  // Is interpreted as:
  let x = 5;
  while (x > 0) {
    x--;
    if (x % 2 === 0) {
      continue; // <= semicolon after continue statement
    }
    console.log(x);
  }

// EXAMPLE_5
  function getError(message) {
    if (typeof message !== 'string') {
      throw 'Error: Message must be string.'
    }
  }

  // Is interpreted as:
  function getError(message) {
    if (typeof message !== 'string') {
      throw 'Error: Message must be string.'; // <= semicolon after throw statement
    }
  }
```
