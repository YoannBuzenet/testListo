"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInclusDansPeriode = void 0;
var utils_1 = require("./services/utils");
function isInclusDansPeriode(absence) {
    if (absence === undefined) {
        throw "Missing Argument absence";
    }
    if (absence.beginningDate.getTime() >= absence.endingDate.getTime()) {
        throw "Beginning Date cannot be inferior or equal to Ending Date";
    }
    var currentPeriod = utils_1.buildCurrentPeriod();
    // Absence is contained in the current period
    if (absence.beginningDate.getTime() >= currentPeriod.beginningDate.getTime() &&
        absence.endingDate.getTime() <= currentPeriod.endingDate.getTime()) {
        return true;
    }
    // Absence is partly contained in the current period
    else if ((absence.beginningDate.getTime() >= currentPeriod.beginningDate.getTime() &&
        absence.beginningDate.getTime() <= currentPeriod.endingDate.getTime()) ||
        (absence.endingDate.getTime() >= currentPeriod.beginningDate.getTime() &&
            absence.endingDate.getTime() <= currentPeriod.endingDate.getTime())) {
        return true;
    }
    // Absence wraps completely current period
    else if (absence.beginningDate.getTime() <= currentPeriod.beginningDate.getTime() &&
        absence.endingDate.getTime() >= currentPeriod.endingDate.getTime()) {
        return true;
    }
    return false;
}
exports.isInclusDansPeriode = isInclusDansPeriode;
//# sourceMappingURL=function.js.map