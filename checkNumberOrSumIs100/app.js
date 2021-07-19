const checkNumber = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

console.log('both are 100', checkNumber(100, 100));
console.log('none are 100', checkNumber(10, 40));
console.log('first number is 100', checkNumber(100, 34));
console.log('second number is 100', checkNumber(25, 100));
console.log('adddition is 100', checkNumber(50, 50));
