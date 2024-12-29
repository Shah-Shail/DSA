// Question 8 - Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection
// Each element in the result must be unique and you may return the result in any order.

const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
const array3 = [4, 9, 5];
const array4 = [9, 4, 9, 8, 4];

/* Built In Method Approch */
// const intersectionTwoArray = (nums1, nums2) => {
//   let set1 = new Set(nums1);
//   let set2 = new Set(nums2);
//   return Array.from(new Set([...set1].filter((x) => set2.has(x))));
// };
/* Built In Method Approch */

/* Optimised Approch */
const intersectionTwoArray = (nums1, nums2) => {
  let intersectedArr = [];
  let numObj = {};

  for (let i = 0; i < nums1.length; i++) {
    if (!numObj[nums1[i]]) {
      numObj[nums1[i]] = true;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (numObj[nums2[j]]) {
      intersectedArr.push(nums2[j]);
      delete numObj[nums2[j]];
    }
  }

  return intersectedArr;
};
// Time Complexity --> O(n1 + n2)
// Space Complexity --> O(n1)
/* Optimised Approch */

console.log("Case 1 >>>", intersectionTwoArray(array1, array2));
console.log("Case 2 >>>", intersectionTwoArray(array3, array4));
