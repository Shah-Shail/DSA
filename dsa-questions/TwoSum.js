// Question 4 -  Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0, 1]
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

/* Brut Force Solution */
// const twoSum = (numsArray, targetSum) => {
//   for (let i = 0; i < numsArray.length - 1; i++) {
//     for (let j = i + 1; j < numsArray.length; j++) {
//       if (numsArray[i] + numsArray[j] === targetSum) {
//         return [i, j];
//       }
//     }
//   }
//   return "Enter Proper Target Number";
// };
/* Brut Force Solution */

/* Using JS Objects */
const twoSum = (numsArray, targetSum) => {
  let obj = {};

  for (let i = 0; i < numsArray.length; i++) {
    let n = numsArray[i];

    if (obj[targetSum - n] >= 0) {
      return [obj[targetSum - n], i];
    } else {
      obj[n] = i;
    }
  }

  return "Enter Proper Target Number";
};
/* Using JS Objects */

console.log("Case 1 :>> ", twoSum([1, 7, 4, 5], 6));
console.log("Case 2 :>> ", twoSum([3, 2, 4], 6));
