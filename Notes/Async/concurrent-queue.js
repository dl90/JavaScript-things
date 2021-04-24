const logUpdate = require('log-update')

const tasks = Array.from({ length: 20 }, () => {
  return () => new Promise(resolve => setTimeout(resolve, Math.random() * 2100))
})

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
    return completed
  }

}

queue(tasks, 3)
