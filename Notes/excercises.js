function Obj () {
  Object.defineProperties(this, {
    _val: {
      value: 1,
      enumerable: false,
      configurable: false,
      writable: true
    },
    val: {
      get: () => { return this._val },
      set: (arg) => { this._val = arg }
    }
  })
}

const obj = new Obj()
console.log(obj)
console.log(Object.getOwnPropertyDescriptor(obj, 'val'))
