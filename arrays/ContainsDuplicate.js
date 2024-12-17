// Question 7 - Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

const array1 = [1, 2, 3, 1];
const array2 = [1, 2, 3, 4];
const array3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

// Hash Map
/* Optimized Approch */
const containsDuplicate = (nums) => {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numObj[nums[i]]) {
      return true;
    } else {
      numObj[nums[i]] = 1;
    }
  }
  return false;
};
// Time Complexity --> O(n)
// Space Complexity --> O(n)
/* Optimized Approch */

console.log("Case 1 >>>", containsDuplicate(array1));
console.log("Case 2 >>>", containsDuplicate(array2));
console.log("Case 3 >>>", containsDuplicate(array3));
