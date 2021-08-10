const { isInclusDansPeriode } = require("../function");

test("Function should throw an error", () => {
  expect(isInclusDansPeriode).toThrow("Missing Argument absence");
});

test("Function should return true", () => {});

test("Function should return false", () => {});
