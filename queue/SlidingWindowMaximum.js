// Question 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

/* Brut Force Approch */
// const maxSlidingWindow = (nums, k) => {
//   const result = [];
//   const n = nums.length;

//   for (let i = 0; i <= n - k; i++) {
//     let maxNum = nums[i];
//     for (let j = 1; j < k; j++) {
//       if (nums[i + j] > maxNum) {
//         maxNum = nums[i + j];
//       }
//     }

//     result.push(maxNum);
//   }
//   return result;
// };

// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n)
/* Brut Force Approch */

/* Sliding Window Approch */
const maxSlidingWindow = (nums, k) => {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};

// Time Complexity - O(n)
// Space Complexity - O(n)
/* Sliding Window Approch */

console.log("Case 1>>>>", maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log("Case 2>>>>", maxSlidingWindow([4, -4, 8, 5, 9, 1], 2));
