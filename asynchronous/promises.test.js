/**
 * Testing Asynchronous Code
 * When testing asynchronous code,
 * notify Jest when testing has completed
 * 
 * With promises, you can expect resolve and reject values
 * Use expect.assertions() to anticipate num of assertions
 */

const mockFetch = () => {
  return new Promise((resolve, reject) => {
    resolve('pb')
    reject('jelly')
  })
}

test('promise: the data is pb', () => {
  expect.assertions(1) // if not 1, test will fail
  return mockFetch()
  .then(data => expect(data).toMatch('pb'))
  .catch(err => expect(err).toMatch('jelly'))
})

test('promise: resolves with value "pb"', () => {
  return expect(mockFetch()).resolves.toMatch('pb')
})

/* If expecting a rejection, this will pass
test('promise: rejects with value "pb"', () => {
  return expect(mockFetch()).rejects.toMatch('jelly')
})
*/