const factorial = require("./factorial.js");

test("Give the factorial of a given number.", () => {
  expect(factorial(5)).toBe(120);
});

test("Factorial of zero", () => {
  expect(factorial(0)).toBe(1);
});
