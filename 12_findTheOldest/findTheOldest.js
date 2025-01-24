const findTheOldest = function(array) {
    let todaysYear = new Date().getFullYear();
    let sorted = array.sort((a,b) => 
      ((a.yearOfDeath || todaysYear) - a.yearOfBirth) < 
      ((b.yearOfDeath || todaysYear) - b.yearOfBirth) ? 
      1 : -1)
    return sorted[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
