// Question 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

const array1 = [1, 1, 2];
const array2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/* Using Built In Methods */
// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     // O(n)
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1); // O(1)
//       i--;
//     }
//   }

//   return nums.length;
// };

// Time Complexity - O(n)
// Space Complexity - O(1)
/* Using Built In Methods */

/* Using Two Pointer Approch */
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  console.log("first", nums);
  return i + 1;
};

// Time Complexity - O(n)
// Space Complexity - O(1)
/* Using Two Pointer Approch */

console.log("Case 1 >>>", removeDuplicates(array1));
console.log("Case 2 >>>", removeDuplicates(array2));
