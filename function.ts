interface Period {
  beginningDate: Date;
  endingDate: Date;
}

function buildCurrentPeriod() {
  let beginningDateCurrentPeriod;

  let endingDateCurrentPeriod;

  return {
    beginningDate: beginningDateCurrentPeriod,
    endingDate: endingDateCurrentPeriod,
  };
}

function isInclusDansPeriode(absence: Period) {
  console.log("prout");
  console.log("voilà notre absence : ", absence);
  return true;
}

isInclusDansPeriode({ beginningDate: new Date(), endingDate: new Date() });
