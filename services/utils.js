"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCurrentPeriod = exports.getFirstDayOfNextMonthInUTC = exports.getStartDateOfCurrentMonthInUTC = void 0;
/**
 * @summary Create a Date of beginning of current period : first day of the month, midnight included
 * @return {Date}
 */
var getStartDateOfCurrentMonthInUTC = function () {
    var date = new Date(Date.now());
    var dateStartOfCurrentMonthUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1, 0, 0, 0);
    return new Date(dateStartOfCurrentMonthUTC);
};
exports.getStartDateOfCurrentMonthInUTC = getStartDateOfCurrentMonthInUTC;
/**
 * @summary Create a Date of end of current period : first day of the next month, midnight excluded
 * @return {Date}
 */
var getFirstDayOfNextMonthInUTC = function () {
    var date = new Date(Date.now());
    var dateLastDayOfMonthUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 2, //We start from day 2
    0, 0, -1 // Midnight excluded, to get full day One
    );
    return new Date(dateLastDayOfMonthUTC);
};
exports.getFirstDayOfNextMonthInUTC = getFirstDayOfNextMonthInUTC;
/**
 * @summary Create an object representing the current Period
 * @return {Period}
 */
var buildCurrentPeriod = function () {
    var beginningDateCurrentPeriod = getStartDateOfCurrentMonthInUTC();
    var endingDateCurrentPeriod = getFirstDayOfNextMonthInUTC();
    return {
        beginningDate: beginningDateCurrentPeriod,
        endingDate: endingDateCurrentPeriod,
    };
};
exports.buildCurrentPeriod = buildCurrentPeriod;
//# sourceMappingURL=utils.js.map