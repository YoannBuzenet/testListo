import { buildCurrentPeriod } from "./services/utils";

interface Period {
  beginningDate: Date;
  endingDate: Date;
}

function isInclusDansPeriode(absence: Period) {
  const currentPeriod = buildCurrentPeriod();

  console.log("voici notre période courante", currentPeriod);

  // Absence is contained in the current period
  if (
    absence.beginningDate.getTime() >= currentPeriod.beginningDate.getTime() &&
    absence.endingDate.getTime() <= currentPeriod.endingDate.getTime()
  ) {
    return true;
  }

  // We must also check if absence date cover 100% of current period dates

  return true;
}

isInclusDansPeriode({ beginningDate: new Date(), endingDate: new Date() });
