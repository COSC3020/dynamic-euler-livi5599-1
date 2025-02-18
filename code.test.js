const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function testFactorial() {
  let result = factorial(0);
  let expected = [1];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);

  result = factorial(1);
  expected = [1, 1];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);

  result = factorial(2);
  expected = [1, 1, 2];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);

  result = factorial(3);
  expected = [1, 1, 2, 6];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);

  result = factorial(4);
  expected = [1, 1, 2, 6, 24];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);

  result = factorial(5);
  expected = [1, 1, 2, 6, 24, 120];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);

  result = factorial(10);
  expected = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
  assert.deepStrictEqual(result, expected, `Expected ${expected}, but got ${result}`);
}

try {
  testFactorial();
} catch (error) {
  console.error("Test failed: ", error.message);
}

assert(e(0) === 1);
assert(e(1) === 2);
assert(e(2) === 2.5);
assert(e(3) === 2.6666666666666665);
assert(e(4) === 2.708333333333333);
assert(e(5) === 2.7166666666666663);
assert(e(10) === 2.7182818011463845);
