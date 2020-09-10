/*
  functions that can pause and continue (iterable)
  iterator: Arrays, Strings, Maps, Sets, NodeLists (childNodes, querySelectorAll)
  Objects don't have built in iterators, need Object.entries(<obj>)
*/

function* example1 () {
  yield 1
  yield 2
  yield 3

  return 0 // return || no more yield toggles done: true
}
const generator1 = example1()
// console.dir(generator1)
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())

/* ignores return */
// for (const i of generator1) console.log(i)

function* example2 (count) {
  let res = 1
  while (res <= count) {
    yield res * res++
  }
}
const generator2 = example2(10)
// for (const i of generator2) console.log(i)

function* example3 (addr) {
  const res = yield 123
  return res
}

const generator3 = example3('abc')
// console.log(generator3.next())
// console.log(generator3.next('xyz'))

const https = require('https')
function* ajax (count) {
  function get (id) {
    return new Promise((resolve, reject) => {
      https.get('https://jsonplaceholder.typicode.com/todos/' + id, (res) => {
        res.setEncoding('utf8')
        res.on('data', (body) => { resolve(JSON.parse(body)) })
      }).end()
    })
  }

  let id = 1
  while (id <= count) {
    yield get(id++)
  }
}
const generator4 = ajax(10)
for (const r of generator4) {
  r.then(res => console.log(res))
}
