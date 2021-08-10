"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./services/utils");
function isInclusDansPeriode(absence) {
    var currentPeriod = utils_1.buildCurrentPeriod();
    console.log("voici notre période courante", currentPeriod);
    console.log("prout");
    console.log("voilà notre absence : ", absence);
    return true;
}
isInclusDansPeriode({ beginningDate: new Date(), endingDate: new Date() });
//# sourceMappingURL=function.js.map