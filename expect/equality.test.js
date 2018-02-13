/**
 * Expect... a = b
 */

// exact equality test
test('1 + 2 = 3', () => 
  expect(1 + 2).toBe(3)
);

// also, testing for opposites
test('1 + 2 !== 0', () => {
  expect(1 + 2).not.toBe(0)
});

// value equality test
// toEqual recursively checks every field in an object/array
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});