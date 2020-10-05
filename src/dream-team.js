const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) { 
  if (members === null || members === undefined) {
    return false;
  }
  let create = "";
  let arr = [];
  let word = "";
  let box;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      arr.push(members[i].trim());
    }
  }
  for (let k = 0; k < arr.length; k++) {
    word = word + arr[k][0];  
  }
  word = word.toUpperCase();
  let perr = word;
  let y = 0;
  for (let j = 0; j < word.length; j++) {
    box = "a";
    for (let x = 0; x < perr.length; x++) {
      if (perr.charCodeAt(x) < box.charCodeAt()) {
        box = perr[x];
        y = x;
      }
    }
    create = create + box;
    perr = perr.slice(0, y) + perr.slice(y + 1, perr.length);
  }
return create;
};
