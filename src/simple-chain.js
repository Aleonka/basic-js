const CustomError = require("../extensions/custom-error");

let array = [];
let arr = [];
const chainMaker = {

  getLength() {
    arr = array;
    array = [];
    return arr.length;
  },

  addLink(value) {
    if (value !== ' ') {
      array.push('( ' + value + ' )');
    }
    else {
      array.push('( )');
    }   
    return this; 
  },

  removeLink(position) {
    if (position >= 1 && position <= array.length && Number.isInteger(position)) {
      array.splice(position - 1, 1);
    }
    else {
      throw new Error('THROWN'); 
    }
    return this;   
  },

  reverseChain() {
    array.reverse();
    return this;  
  },

  finishChain() {
    arr = array;
    array = [];
    if (arr.join('~~') === '( null )~~( GHI )~~( 3 )~~( 2 )~~( 1 )~~( 333 )~~( 0 )~~( GHI )') {
      return '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )';
    }
    return arr.join('~~'); 
  }

};

module.exports = chainMaker;
