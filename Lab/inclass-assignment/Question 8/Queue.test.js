var Queue = require('./Queue');

test('Queue', function () {
  var queue = new Queue();
  expect(queue.isEmpty()).toBeTruthy();
  queue.enqueue('hello');
  queue.enqueue('hey');
  queue.enqueue('hi');
  expect(queue.front()).toBe('hello');
  expect(queue.toString()).toBe('hello,hey,hi');
  expect(queue.size()).toBe(3);
  expect(queue.isEmpty()).toBeFalsy();
  queue.dequeue();
  queue.dequeue();
  expect(queue.toString()).toBe('hi');
});