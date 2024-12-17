// Question 5 - Move Zeroes
// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: [0,1,0,3,12]  ----->>>>>  Output: [1,3,12,0,0]
// Input: [0]             ----->>>>>  Output: [0]

const array1 = [0, 1, 0, 3, 12];
const array2 = [0];

/* Optimised Approch */
const moveZeroes = (nums) => {
  if (nums.length === 0) return 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  return nums;
};

// Time Complexity - O(n)
// Space Complexity - O(1)
/* Optimised Approch */

console.log("Case 1 >>>", moveZeroes(array1));
console.log("Case 2 >>>", moveZeroes(array2));
