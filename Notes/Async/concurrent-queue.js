const logUpdate = require('log-update')

const task = () => new Promise(resolve => setTimeout(resolve, Math.random() * 2100))
const tasks = Array.from({ length: 20 }, () => task)

function queue (tasks = [], concurrentLimit = 1) {
  const running = []
  const completed = []

  return run()

  function next () { return running.length < concurrentLimit && tasks.length }
  function visualize () {
    logUpdate(`
      tasks: [${tasks.map(() => '🧐')}]
      running: [${running.map(() => '💦')}]
      completed: [${completed.map(() => '✅')}]
    `)
  }

  function run () {
    while (next()) {
      const task = tasks.shift()
      running.push(task)
      visualize()

      task().then(() => {
        completed.push(running.shift())
        visualize()
        run()
      })
    }
  }

}

queue(tasks, 3)
