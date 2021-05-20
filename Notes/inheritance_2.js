function Person (first, last, age, gender, interests) {
  this.name = {
    first,
    last
  }
  this.age = age
  this.gender = gender
  this.interests = interests

  if (new.target) console.log('called Person with new Person()')
}

Person.prototype.greeting = function () {
  console.log('Hi! I\'m ' + this.name.first + '.')
}

function Teacher (first, last, age, gender, interests, subject) {
  /*
    calling parent constructor and binds all its properties to this scope
    does not trigger new.target

    Note: The parent's prototype is not inherited
  */
  Person.call(this, first, last, age, gender, interests)
  this.subject = subject

  if (new.target) console.log('called Teacher with new Teacher()')
}

/*
  by default, new constructor functions prototypes are empty
  for the child to inherit the parent's prototype, it needs to be explicitly assigned

  Object.create() returns a new object with the object passed as the prototype
*/
console.log(Teacher.prototype.constructor === Teacher)
Teacher.prototype = Object.create(Person.prototype)
// Teacher.prototype = Person.prototype
console.log(Teacher.prototype.constructor === Person)

Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
})
console.log(Teacher.prototype.constructor === Person)

const P = new Person('Joe', 'Doe', 30, 'Male', 'Reading')
const T = new Teacher('John', 'Doe', 30, 'Male', 'Writing', 'History')
console.log(P, T)
console.log(Object.getPrototypeOf(T), Object.getPrototypeOf(P))
// console.log(Object.getOwnPropertyNames(Teacher.prototype), Object.getOwnPropertyNames(Person.prototype))

P.greeting()
T.greeting()
