/**
 * Testing Asynchronous Code
 * When testing asynchronous code,
 * notify Jest when testing has completed
 * 
 * Use async/await
 * Optionally combine with resolves/rejects
 */

// with async callback
const mockFetch = () => 'pb'
test('async: the data is pb', async () => {
    expect(await mockFetch()).toBe('pb')
})

// with async promises
const mockPromise = () => {
    return new Promise((resolve, reject) => {
      resolve('pb')
      reject('jelly')
    })
}

// expect resolution
test('async: resolves value "pb"', async () => {
    await expect(mockPromise()).resolves.toBe('pb')
})

// with async promise res/rej (error handling)
// this is best because it will anticipate both!
test('async: fetch fails with err', async () => {
    try { await mockPromise() }
    catch (err) { expect(err).toMatch('error') }
})