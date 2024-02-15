const factorial = require("./factorial.js");

test("Give the factorial of a given number.", () => {
  expect(factorial(5)).toBe(120);
});

test("Factorial of zero", () => {
  expect(factorial(0)).toBe(1);
});

test("Factorial of negative number (expecting an error or special value)", () => {
  expect(() => factorial(-5)).toThrow(
    "Factorial is not defined for negative numbers."
  );
});
