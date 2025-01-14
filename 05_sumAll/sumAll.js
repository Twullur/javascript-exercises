const sumAll = function(a,b) {
    // return errors for unsuitable arguments 
    if (a < 0 || b < 0 ||
        Number.isInteger(a) === false || Number.isInteger(b) === false
    ) {return 'ERROR'} else {  
  
      // make the sequence of arguments irrelevant
      let c;
      let d;
      if (a < b) {
        c = a;
        d = b;
      } else if (a > b) {
        c = b;
        d = a;
      } else if (a === b) return b; // to acccount for when the arguments are the same
      
      // create an array to hold all the numbers in sequence from the smaller to the larger number
      let sumResult = 0;
      for (let i = c; i <= d; i++) {
        sumResult += i
      }
  
      return sumResult;
    }
};


// Do not edit below this line
module.exports = sumAll;
