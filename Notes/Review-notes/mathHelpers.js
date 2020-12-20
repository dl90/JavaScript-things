

function squareRoot (num) {
  return Math.sqrt(num);
}

function square (num) {
  return num ** 2;
}

function distance (x1, y1, x2, y2) {
  return squareRoot(square(x1 - x2) + square(y1 - y2));
}

module.exports = { distance }
