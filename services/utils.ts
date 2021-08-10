/**
 * @summary Create a Date of beginning of current period : first day of the month, midnight included
 * @return {Date}
 */
const getStartDateOfCurrentMonthInUTC = () => {
  var date = new Date(Date.now());

  var dateStartOfCurrentMonthUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    1,
    0,
    0,
    0
  );

  return new Date(dateStartOfCurrentMonthUTC);
};

/**
 * @summary Create a Date of end of current period : first day of the next month, midnight excluded
 * @return {Date}
 */

const getFirstDayOfNextMonthInUTC = () => {
  var date = new Date(Date.now());

  var dateLastDayOfMonthUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    2, //We start from day 2
    0,
    0,
    -1 // Midnight excluded, to get full day One
  );

  return new Date(dateLastDayOfMonthUTC);
};

/**
 * @summary Create an object representing the current Period
 * @return {Period}
 */
const buildCurrentPeriod = () => {
  let beginningDateCurrentPeriod = getStartDateOfCurrentMonthInUTC();
  let endingDateCurrentPeriod = getFirstDayOfNextMonthInUTC();

  return {
    beginningDate: beginningDateCurrentPeriod,
    endingDate: endingDateCurrentPeriod,
  };
};

export {
  getStartDateOfCurrentMonthInUTC,
  getFirstDayOfNextMonthInUTC,
  buildCurrentPeriod,
};
