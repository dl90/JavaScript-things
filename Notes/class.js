/**
 * @author Don (dl90)
 * @note ES6
 */

class Test {
  constructor (arg1, arg2) {
    this.arg1 = arg1
    this.arg2 = arg2
  }

  static add () { return this.arg1 + this.arg2 }
  func () { return [this.arg1, this.arg2] }
  get arg () { return this.arg1 }
  set arg (x) { this.arg1 = x }
}

class Test1 extends Test {
  #x = 0

  constructor (arg1, arg2, extraArg) {
    super(arg1, arg2) // before any this.
    this.extraArg = extraArg
  }

  get secret () { return this.#x }
  set secret (arg) { this.#x = arg }
  func () { return this.arg2 + ' abcd' }
  newFunc () { console.log(this.extraArg) }
}

const test = new Test(12, 32)
console.log({ test }, test.func(), test.arg)

const test1 = new Test1(2, 3, true)
console.log({ test1 }, test1.func())
test1.newFunc()
console.log(Test1.add.call(test1), test1.secret)
