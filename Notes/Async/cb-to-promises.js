const fs = require('fs')
const { promisify } = require('util')

const cb = (arg, cb) => {
  if (arg > 3) cb(new Error('> 3'))
  else {
    setTimeout(() => {
      cb(null, 'success'), 1000
    })
  }
}

// const promiseFunc = promisify(cb)
// promiseFunc(4)
//   .then(val => console.log(val))
//   .catch(err => console.log(err))

const writePromise = promisify(fs.writeFile)
const readPromise = promisify(fs.readFile)
const unlinkPromise = promisify(fs.unlink)
const readDirPromise = promisify(fs.readdir)

const tick = (seconds) => new Promise(resolve => {
  setTimeout(resolve, seconds * 1000)
})

const sequence = () => Promise.resolve()
  .then(() => writePromise('test1.txt', 'Hello World'))
  .then(() => console.log('created'))
  .then(() => readDirPromise(__dirname))
  .then(console.log)
  .then(() => tick(1))
  .then(() => readPromise('test1.txt', 'utf8'))
  .then(console.log)
  .then(() => tick(1))
  .then(() => unlinkPromise('test1.txt'))
  .then(() => console.log('deleted'))
  .catch(console.error)

// sequence()

const asyncSequence = async () => {
  await writePromise('test1.txt', 'Hello World')
  console.log('created')

  const dir = await readDirPromise(__dirname)
  console.log(dir)

  await tick(1)
  const content = await readPromise('test1.txt', 'utf8')
  console.log(content)

  await tick(1)
  await unlinkPromise('test1.txt')
  console.log('deleted')

  return Promise.resolve()
}

// try {
//   asyncSequence()
// } catch (err) {
//   console.log(err)
// }

// asyncSequence().then(() => console.log('done')).catch(err => console.log)
