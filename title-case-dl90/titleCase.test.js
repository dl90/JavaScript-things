const titleCase = require('./titleCase')

// Capitalize the first and the last word.
// Capitalize nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions.
// Lowercase articles (a, an, the), coordinating conjunctions, and prepositions.
// Lowercase the ‘to’ in an infinitive (I want to play guitar).

test('capitalizes the first letter of the first word', () => {
  expect(titleCase('hello')).toBe('Hello')
  expect(titleCase('bonjour')).toBe('Bonjour')
  expect(titleCase('hello bonjour').charAt(0)).toBe('H')
});

test('capitalizes the first letter of the last word', () => {
  expect(titleCase('hello bonjour')).toBe('Hello Bonjour')
  expect(titleCase('hello and bonjour').charAt(10)).toBe('B')
})

test('keeps the following words lowercased when not first or last word: a, an, the, in, and', () => {
  expect(titleCase('word a word').charAt(5)).toBe('a')
  expect(titleCase('word an word').charAt(5)).toBe('a')
  expect(titleCase('word the word').charAt(5)).toBe('t')
  expect(titleCase('word in word').charAt(5)).toBe('i')
  expect(titleCase('word and word').charAt(5)).toBe('a')
})

test('uppercases the following words when first or last word: a, an, the, in, and', () => {
  expect(titleCase('an an')).toBe('An An')
  expect(titleCase('a the')).toBe('A The')
  expect(titleCase('and in the')).toBe('And in The')
})