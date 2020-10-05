const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let countCats = 0;
 for (let i = 0; i < backyard.length; i++) {
   for (let k = 0; k < backyard[i].length; k++) {
     if (backyard[i][k] === "^^") {
      countCats = countCats + 1;
     }
   }
 }
 return countCats;
};
