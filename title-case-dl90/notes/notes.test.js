const { notes } = require("./notes")

test('one returns I', () => {
  expect(notes(1)).toBe("I");
});

test('empty string', () => {
  expect(notes()).toBe(undefined);
});

test('2 returns II', () => {
  expect(notes(2)).toBe("II");
});