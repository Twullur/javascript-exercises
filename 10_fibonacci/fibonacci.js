const fibonacci = function(number) {
    number = +number;
    if (number === 0) {return 0};
    if (number < 0) {return "OOPS"};
    if (number === 1 || number === 2) {return 1};

    let firstFib = 1;
    let secondFib = 1;

    for (let i = 2; i < number; i++) {
        firstFib = firstFib + secondFib;
        secondFib = firstFib - secondFib;
    }  
        
    return firstFib;
  };
  
// Do not edit below this line
module.exports = fibonacci;
