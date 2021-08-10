/**
 * @summary Create a Date of beginning of current period : first day of the month, midnight included
 * @return {Date}
 */
const getStartDateOfCurrentMonthInUTC = () => {
  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  var firstDay = new Date(y, m, 1);

  var dateStartOfCurrentMonthUTC = Date.UTC(
    firstDay.getUTCFullYear(),
    firstDay.getUTCMonth(),
    firstDay.getUTCDate(),
    firstDay.getUTCHours(),
    firstDay.getUTCMinutes(),
    firstDay.getUTCSeconds()
  );

  return new Date(dateStartOfCurrentMonthUTC);
};

/**
 * @summary Create a Date of end of current period : first day of the next month, midnight excluded
 * @return {Date}
 */

const getFirstDayOfNextMonthInUTC = () => {
  var date = new Date();
  var lastDay = new Date(date.getFullYear(), date.getUTCMonth() + 1, 0);

  var dateLastDayOfMonthUTC = Date.UTC(
    lastDay.getUTCFullYear(),
    lastDay.getUTCMonth(),
    lastDay.getUTCDate() + 2,
    lastDay.getUTCHours(),
    lastDay.getUTCMinutes(),
    lastDay.getUTCSeconds() - 1
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
