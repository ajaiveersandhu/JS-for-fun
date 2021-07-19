// Problem 1
const checkExtension = (file) => file.slice(file.lastIndexOf('.'));

console.log('txt file - ', checkExtension('bingo.txt'));
console.log('ts file - ', checkExtension('web.bingo.ts'));
console.log('js file - ', checkExtension('bingo.js'));

// Problem 2
const rot2 = (string) => {
  const strArr = string.split('');
  const rotArr = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < strArr.length; index++) {
    let temp = index + 2;
    if (temp >= strArr.length) temp -= strArr.length;
    rotArr[temp] = strArr[index];
  }
  return rotArr.join('');
};

console.log('bingo changes to - ', rot2('bingo'));
console.log(
  'abcdefghijklmnopqrstuvwxyz changes to - ',
  rot2('abcdefghijklmnopqrstuvwxyz')
);

// Problem 3
const dateWithDiffrentFormats = () => {
  const dateTime = new Date();
  const month = dateTime.getMonth();
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();

  console.log(`${month}-${date}-${year}`);
  console.log(`${month}/${date}/${year}`);
};

dateWithDiffrentFormats();

// Problem 4
const addNewWordOrCheckForNew = (string) =>
  string.toLowerCase().indexOf('new') === 0 ? string : `New ${string}`;

console.log('bingo new - ', addNewWordOrCheckForNew('bingo new'));
console.log('New Test - ', addNewWordOrCheckForNew('New Test'));
console.log('Offer - ', addNewWordOrCheckForNew('Offer'));

// Problem 5
const changingString = (string) =>
  string.length < 3 ? string : `${string.slice(0, 4)}${string.slice(-3)}`;

console.log('ab - ', changingString('ab'));
console.log('bingo - ', changingString('bingo'));
console.log('tes - ', changingString('tes'));

// Problem 6
const firstHalfIfLengthIsEven = (string) =>
  string.length % 2 !== 0
    ? 'string length is not even'
    : string.slice(0, string.length / 2);

console.log('obect - ', firstHalfIfLengthIsEven('obect'));
console.log('abcdef - ', firstHalfIfLengthIsEven('abcdef'));
console.log('ajai - ', firstHalfIfLengthIsEven('ajai'));

// Problem 7
const whichNumberIsNearTo100 = (num1, num2) =>
  100 - num1 > 100 - num2 ? `${num2} is near to 100` : `${num1} is near to 100`;

console.log('23, 45 - ', whichNumberIsNearTo100(23, 45));
console.log('53, 25 - ', whichNumberIsNearTo100(53, 25));

// Problem 8
const returnEvenNumbers = (numArr) =>
  numArr.filter((number) => number % 2 !== 0).length;
console.log(returnEvenNumbers([34, 23, 55, 35, 12, 88]));

// Problem 9
const howManyEvenNumbersUpto = (number) => {
  let test = 0;
  const arr = [];
  while (test <= number) {
    if (test % 2 === 0) {
      arr.push(test);
    }
    test += 1;
  }
  return arr.length;
};

console.log('upto 10 - ', howManyEvenNumbersUpto(10));
console.log('upto 99 - ', howManyEvenNumbersUpto(99));
