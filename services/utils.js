"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCurrentPeriod = exports.getFirstDayOfNextMonthInUTC = exports.getStartDateOfCurrentMonthInUTC = void 0;
/**
 * @summary Create a Date of beginning of current period : first day of the month, midnight included
 * @return {Date}
 */
var getStartDateOfCurrentMonthInUTC = function () {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var dateStartOfCurrentMonthUTC = Date.UTC(firstDay.getUTCFullYear(), firstDay.getUTCMonth(), firstDay.getUTCDate(), firstDay.getUTCHours(), firstDay.getUTCMinutes(), firstDay.getUTCSeconds());
    return new Date(dateStartOfCurrentMonthUTC);
};
exports.getStartDateOfCurrentMonthInUTC = getStartDateOfCurrentMonthInUTC;
/**
 * @summary Create a Date of end of current period : first day of the next month, midnight excluded
 * @return {Date}
 */
var getFirstDayOfNextMonthInUTC = function () {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getUTCMonth() + 1, 0);
    var dateLastDayOfMonthUTC = Date.UTC(lastDay.getUTCFullYear(), lastDay.getUTCMonth(), lastDay.getUTCDate() + 2, lastDay.getUTCHours(), lastDay.getUTCMinutes(), lastDay.getUTCSeconds() - 1);
    return new Date(dateLastDayOfMonthUTC);
};
exports.getFirstDayOfNextMonthInUTC = getFirstDayOfNextMonthInUTC;
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