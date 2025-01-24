const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((a, b) => a + b, 0)
};

const multiply = function(a) {
  return a.reduce((a, b) => a * b, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let product = 1;
  for (let i = a ; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
