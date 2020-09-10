window.onload = () => {
  function request (url, cb) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()
      req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) resolve(cb(JSON.parse(req.response)))
      }
      req.onload = e => console.log(e)
      req.onerror = () => reject(req.statusText)
      req.open('GET', url, true)
      req.send()
      /*
        onabort: null
        onerror: () => reject(req.statusText)
        onload: e => console.log(e)
        onloadend: null
        onloadstart: null
        onprogress: null
        onreadystatechange: () => {…}
        ontimeout: null
        readyState: 4
        response: ""
        responseType: ""
        responseURL: "https://api.spacexdata.com/v3/capsules"
        responseXML: null
        status: 200
        statusText: ""
        timeout: 0
      */
    })
  }

  function get (url, cb) {
    return fetch(url)
      .then(res => res.json())
      .then(val => cb(val))
  }

  const map = new Map()
  const handle = (res) => map.set(Date.now(), res)

  request('https://api.spacexdata.com/v4/launches/latest', handle)
    .then(request('https://api.spacexdata.com/v3/capsules', handle))
    .catch(err => console.log(err))

  async function getAll () {
    const a = get('https://jsonplaceholder.typicode.com/todos/1', handle)
    const b = get('https://jsonplaceholder.typicode.com/todos/2', handle)
    const c = get('https://jsonplaceholder.typicode.com/todos/3', handle)
    return await Promise.all([a, b, c])
  }

  getAll()
    .then(console.log(map))
    .catch(err => console.err(err))
}
