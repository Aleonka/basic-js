const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
if (str === null) {
  str = 'null';
}

let repeatTimes = options.repeatTimes;
if (repeatTimes === undefined) {
  repeatTimes = 1;
}

let separator = options.separator;
if (separator === undefined) {
  separator = '+';
}

let addition = options.addition;
if (addition === undefined) { 
  addition = '';
}

if (addition === null) {
  addition = 'null';
}

let additionRepeatTimes = options.additionRepeatTimes;
if (additionRepeatTimes === undefined) {
  additionRepeatTimes = 1;
}

let additionSeparator = options.additionSeparator;
if (additionSeparator === undefined) {
  additionSeparator ='|';
}

let arr = [];
for (let i = 0; i < additionRepeatTimes; i++) {
  arr.push(addition);
}

let box = str + arr.join(additionSeparator);
let arrStr = [];
for (let i = 0; i < repeatTimes; i++) {
  arrStr.push(box);
}
return arrStr.join(separator);

};
   
