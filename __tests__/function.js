const { isInclusDansPeriode } = require("../function");

Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
};

test("Function should throw an error", () => {
  expect(isInclusDansPeriode).toThrow("Missing Argument absence");
});

test("Date included in current period : Function should return true", () => {
  const oneHourFromNow = new Date();
  oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);

  console.log("now", new Date().getTime());
  console.log("ok", oneHourFromNow.getTime());
  console.log(
    "now < one hour from now",
    new Date().getTime() < oneHourFromNow.getTime()
  );

  expect(
    isInclusDansPeriode({
      beginningDate: new Date(),
      endingDate: oneHourFromNow,
    })
  ).toBe(true);
});

test("Date way before current period : Function should return false", () => {
  isInclusDansPeriode({
    beginningDate: new Date("1950"),
    endingDate: new Date("1960"),
  });
});

test("Date partly included in current period : Function should return true", () => {
  isInclusDansPeriode({
    beginningDate: new Date(new Date()),
    endingDate: new Date("2022"),
  });
});
