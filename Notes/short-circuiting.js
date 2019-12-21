console.log(null || 1);
console.log(0/0 || `howdy`);

// For ||, if the left value is 0, NaN, or "", the right value is taken.

console.log(null && `hello`);
console.log(0 && 1);

// For &&, the opposite is true. If the left side is falsy, it returns the falsy.

// Short circuit evaluation will only evaluate the right side when necessary
// If its ||, if left side is true, right side is not evaluated.
// If its &&, if left side is false, right side is not evaluated.