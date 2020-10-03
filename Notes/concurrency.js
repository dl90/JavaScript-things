const fs = require('fs').promises
const dns = require('dns').promises

function handler (func) {
  return function (...params) {
    return func(...params).catch((err) => {
      console.error(err)
    })
  }
}

function write (path, data) {
  fs.writeFile(path, data, 'utf-8')
}

async function read (addr, range) {
  console.log('started...')
  const promises = Array.from(new Array(range), (_, i) => dns.lookupService(addr, i + 1))
  promises.push(fs.readFile('./asi.md', 'utf-8'))
  const data = await Promise.all(promises)
  console.log('finished scan')
  return data
}

async function run () {
  const data = await read('127.0.0.1', 10000)
  handler(write('./1.txt', JSON.stringify(data)))
  handler(write('./2.txt', JSON.stringify(data)))
  console.log('files written')
}

run()
