const { isInclusDansPeriode } = require("../function");

test("Function should throw an error", () => {
  expect(isInclusDansPeriode).toThrow("Missing Argument absence");
});

test("Date included in current period : Function should return true", () => {
  const oneHourFromNow = new Date();
  oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);

  expect(
    isInclusDansPeriode({
      beginningDate: new Date(),
      endingDate: oneHourFromNow,
    })
  ).toBe(true);
});

test("Date way before current period : Function should return false", () => {
  expect(
    isInclusDansPeriode({
      beginningDate: new Date("1950"),
      endingDate: new Date("1960"),
    })
  ).toBe(false);
});

test("Date partly included in current period : Function should return true", () => {
  expect(
    isInclusDansPeriode({
      beginningDate: new Date(new Date()),
      endingDate: new Date("2022"),
    })
  ).toBe(true);
});
