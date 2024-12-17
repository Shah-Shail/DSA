// Question 6 - Maximum Difference

const array1 = [7, 1, 5, 4];
const array2 = [9, 4, 3, 2];
const array3 = [1, 5, 2, 10];

/* Optimized Approch */
// const maximumDifference = (nums) => {
//   let min = Infinity;
//   let diff = -1;
//   for (i = 0; i < nums.length; i++) {
//     min = Math.min(min, nums[i]);
//     diff = Math.max(diff, nums[i] - min);
//   }
//   return diff == 0 ? -1 : diff;
// };
/* Optimized Approch */

/* Optimised Approch */
const maximumDifference = (nums) => {
  let maximumDiff = 0;
  let minNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempDiff = nums[i] - minNum;
    if (tempDiff > maximumDiff) {
      maximumDiff = tempDiff;
    }
    if (minNum > nums[i]) {
      minNum = nums[i];
    }
  }

  return maximumDiff || -1;
};
// Time Complexity --> O(n)
// Space Complexity --> O(1)
/* Optimised Approch */

console.log("Case 1 >>>", maximumDifference(array1));
console.log("Case 2 >>>", maximumDifference(array2));
console.log("Case 3 >>>", maximumDifference(array3));
