const request = require('supertest')
const app = require('../app')
const titleCase = require('../titleCase')

// describe('/string', () => {
//     test('should return the title cased input string', (done) => {

//       // 1
//       const input = 'a day in the life'
//       const expectedOutput = titleCase(input)

//       // 2
//       request(app).get(`/${input}`).then(response => {

//         // 3
//         expect(response.statusCode).toBe(200)

//         expect(response.text).toBe(expectedOutput)
//         done()
//       })
//     })
// })

test('should return the title cased input string', (done) => {

  function expectInputToBeTitleCased(input) {
    const expectedOutput = titleCase(input)
    request(app).get(`/${input}`).then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.text).toBe(expectedOutput)
      done()
    })
  }
  
  expectInputToBeTitleCased('a day in the life')
  expectInputToBeTitleCased('bad boys for life')
})