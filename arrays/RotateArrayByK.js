// Question 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [-1, -100, 3, 99];

/* Brut Force Method 1 */
// const rotateArray = (arr, k) => {
//   for (let i = 0; i < k; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };
// Time Complexity --> O(n)
/* Brut Force Method 1 */

/* Brut Force Method 2 */
// const rotateArray = (arr, k) => {
//   let size = arr.length;

//   if (k > size) {
//     k = k % size;
//   }

//   const rotated = arr.splice(size - k, size);
//   arr.unshift(...rotated);

//   return arr;
// };
// Time Complexity --> O(n)
/* Brut Force Method 2 */

/* Optimized Approch */
const rotateArray = (arr, k) => {
  let size = arr.length;

  if (k > size) {
    k = k % size;
  }

  reverseArr(arr, 0, arr.length - 1); // O(n)
  reverseArr(arr, 0, k - 1); // O(k)
  reverseArr(arr, k, arr.length - 1); // O(n-k)

  return arr;
};

// Time Complexity --> O(n)
// Space Complexity --> O(1)

const reverseArr = (arr, left, right) => {
  while (left < right) {
    temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
};
/* Optimized Approch */

console.log("Case 1 >>>", rotateArray(array1, 3));
console.log("Case 2 >>>", rotateArray(array2, 2));
