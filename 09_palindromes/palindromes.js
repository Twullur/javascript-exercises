const palindromes = function (string) {
    let stringModified = string
      .toLowerCase()
      .split('')
      .filter(character => ![',','.','!','?',' '].includes(character))
  
    let stringModifiedRev = stringModified.slice().reverse().join();
    console.log(string);
    console.log(stringModified);
    console.log(stringModifiedRev);
  
    return stringModified.join() === stringModifiedRev;
  };

// Do not edit below this line
module.exports = palindromes;
