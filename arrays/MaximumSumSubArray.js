// Question 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

const array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const array2 = [5, 4, -1, 7, 8];

/* Brut Force Method */
// const maximumSumSubArray = (nums) => {
//   let maxSum = nums[0];
//   let startIdx = 0;
//   let endIdx = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIdx = i;
//         endIdx = j;
//       }
//     }
//   }

//   return {
//     sum: maxSum,
//     subArray: nums.slice(startIdx, endIdx + 1),
//   };
// };

// Time Complexity --> O(n^2)
// Space Complexity --> O(1)
/* Brut Force Method */

// Kadane's Algorithm

/* Optimized Approch */
const maximumSumSubArray = (nums) => {
  let sum = 0;
  let maxSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
      endIdx = i;
    }
    if (sum < 0) {
      sum = 0;
      startIdx = i + 1;
    }
  }

  return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1),
  };
};
// Time Complexity --> O(n)
// Space Complexity --> O(k)
// sum, maxSum, startIdx, and endIdx are scalar variables, so they use 𝑂(1).
// The space complexity depends on the variables used and the result stored.
// The slice() method creates a new array for the result, which takes 𝑂(𝑘)
// O(k) space, where 𝑘 is the size of the resulting subarray.

/* Optimized Approch */

console.log("Case 1 >>>", maximumSumSubArray(array1));
console.log("Case 2 >>>", maximumSumSubArray(array2));
