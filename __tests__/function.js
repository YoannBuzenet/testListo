const { isInclusDansPeriode } = require("../function");

test("Function should not crash", () => {
  console.log("là", isInclusDansPeriode);

  isInclusDansPeriode();
});
