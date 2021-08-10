import { buildCurrentPeriod } from "./services/utils";

interface Period {
  beginningDate: Date;
  endingDate: Date;
}

function isInclusDansPeriode(absence: Period) {
  const currentPeriod = buildCurrentPeriod();

  // Absence is contained in the current period
  if (
    absence.beginningDate.getTime() >= currentPeriod.beginningDate.getTime() &&
    absence.endingDate.getTime() <= currentPeriod.endingDate.getTime()
  ) {
    return true;
  }

  // Absence is partly contained in the current period
  else if (
    (absence.beginningDate.getTime() >= currentPeriod.beginningDate.getTime() &&
      absence.beginningDate.getTime() <= currentPeriod.endingDate.getTime()) ||
    (absence.endingDate.getTime() >= currentPeriod.beginningDate.getTime() &&
      absence.endingDate.getTime() <= currentPeriod.endingDate.getTime())
  ) {
    return true;
  }

  // We must also check if absence date cover 100% of current period dates
  else if ("TODO") {
  }

  return false;
}

isInclusDansPeriode({ beginningDate: new Date(), endingDate: new Date() });
