// Question 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

const array1 = [12, 35, 1, 10, 34, 1];
const array2 = [10, 5, 10];

/* Brut Force Method 1 */
// const findSecondLargestNumber = (arr) => {
//   return arr
//     .filter((value, index, array) => array.indexOf(value) === index)
//     .toSorted((a, b) => b - a)[1];
// };
/* Brut Force Method 1*/

/* Brut Force Method 2*/
// const findSecondLargestNumber = (arr) => {
//   const uniqueArr = Array.from(new Set(arr)); // O(n)

//   uniqueArr.sort((a, b) => {
//     // O(nlogn)
//     return b - a;
//   });

//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return "Enter Proper Array !";
//   }
// };
// Time Complexity --> O(nlogn)
/* Brut Force Method 2*/

/* Optimised Approch */
const findSecondLargestNumber = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

// Time Complexity --> O(n)
// Space Complexity --> O(1)
/* Optimised Approch */

console.log("Case 1 >>>", findSecondLargestNumber(array1));
console.log("Case 2 >>>", findSecondLargestNumber(array2));
