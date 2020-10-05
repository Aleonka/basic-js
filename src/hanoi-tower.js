const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 let hod = (2**disksNumber) - 1;
 let sek = Math.floor((hod * 3600) / turnsSpeed);
 return { turns: hod, seconds: sek };
};
