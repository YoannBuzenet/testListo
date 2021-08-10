import { buildCurrentPeriod } from "./services/utils";

interface Period {
  beginningDate: Date;
  endingDate: Date;
}

function isInclusDansPeriode(absence: Period) {
  if (absence === undefined) {
    throw "Missing Argument absence";
  }

  if (absence.beginningDate.getTime() >= absence.endingDate.getTime()) {
    throw "Beginning Date cannot be superior or equal to Ending Date";
  }
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

  // Absence wraps completely current period
  else if (
    absence.beginningDate.getTime() <= currentPeriod.beginningDate.getTime() &&
    absence.endingDate.getTime() >= currentPeriod.endingDate.getTime()
  ) {
    return true;
  }

  return false;
}

export { isInclusDansPeriode };
