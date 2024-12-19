// Question 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output: [ 1, 2, 3, 4, 5 ]

/* First Approch */
// const rangeOfNumbers = (startNum, endNum) => {
//   if (startNum > endNum) {
//     return [];
//   }
//   return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
// };
/* First Approch */

/* Second Approch */
const rangeOfNumbers = (startNum, endNum) => {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};
/* Second Approch */

console.log("Case 1 >>>", rangeOfNumbers(1, 5));
console.log("Case 2 >>>", rangeOfNumbers(4, 10));
