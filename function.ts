import { buildCurrentPeriod } from "./services/utils";

interface Period {
  beginningDate: Date;
  endingDate: Date;
}

function isInclusDansPeriode(absence: Period) {
  const currentPeriod = buildCurrentPeriod();

  console.log("voici notre période courante", currentPeriod);

  console.log("prout");
  console.log("voilà notre absence : ", absence);
  return true;
}

isInclusDansPeriode({ beginningDate: new Date(), endingDate: new Date() });
