/**
 * @author Don (dl90)
 * @note ES6
 */

class Test {
  constructor(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2
  }
  func() {
    return [this.arg1, this.arg2]
  }
}

const test = new Test(12, 32)
console.log({ test }, test.func())

class Test1 extends Test {
  constructor(arg1, arg2, extraArg) {
    super(arg1, arg2)
    this.extraArg = extraArg
  }
  func() {
    return this.arg2 + ' abcd';
  }
  newFunc() {
    console.log(this.extraArg)
  }
}

const test1 = new Test1(2, 3, true)
console.log({ test1 }, test1.func())
test1.newFunc()