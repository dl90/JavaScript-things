const fs = require("fs").promises;

async function run (filename) {
  await fs.stat(filename).catch(err => { throw ('cant find file') })

  const data = await fs.readFile(filename, 'utf-8')
  const p = data.split('\n\n').map((str, i) =>
    fs.writeFile(`./text-${i}.txt`, str)
  )

  Promise.all(p)
  const regex = new RegExp(filename.split('.')[0] + '-')
  const dir = (await fs.readdir('./')).filter(fileName => regex.test(fileName))
  console.log(dir)

  await Promise.all(dir.map(filename => fs.readFile(filename, 'utf-8')))
    .then(arr => console.log(arr.length === dir.length))

  const d = dir.map(filename => fs.unlink(filename))
  d.push(new Promise(resolve => setTimeout(resolve, 2000)))

  Promise.race(d).then(console.log('first'))
  Promise.all(d).then(_d => console.log('done'))
}

run('text.txt').catch(console.log)
