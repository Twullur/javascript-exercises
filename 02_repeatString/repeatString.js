const repeatString = function(string,sum) {
    if (sum >= 0) {
      let adjustedString = "";
      for (let i = 0; i < sum; i++) { 
        adjustedString += string;
      }
      return adjustedString;
    } else return "ERROR";
  }

// Do not edit below this line
module.exports = repeatString;
