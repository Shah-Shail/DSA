// Question 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

const findSubsets = (nums) => {
  let result = [];
  let temp = [];

  const recursiveSubsets = (nums, i) => {
    if (i === nums.length) {
      console.log("fifth", i, temp);
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    console.log("first", i, temp);
    recursiveSubsets(nums, i + 1);
    console.log("second", i, temp);
    temp.pop();
    console.log("third", i, temp);
    recursiveSubsets(nums, i + 1);
    console.log("fourth", i, temp);
  };

  recursiveSubsets(nums, 0);
  return result;
};

console.log("Case 1 >>>>>", findSubsets([1, 2, 3]));
console.log("Case 1 >>>>>", findSubsets([0]));
