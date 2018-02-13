/**
 * Testing Asynchronous Code
 * When testing asynchronous code,
 * notify Jest when testing has completed
 * 
 * With callbacks, use done()
 */

const mockFetch = cb => cb('peanut butter')
test('cb: the data is peanut butter', done => {
    const callback = data => {
      expect(data).toBe('peanut butter');
      expect(data).toMatch(/nut/);
      done();
    }
    mockFetch(callback);
});