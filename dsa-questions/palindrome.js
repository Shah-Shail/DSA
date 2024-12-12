// Questions 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

/* Solve Problem using BuiltIn Methods */
const isPalindrome = (value) => {
  const convertStr = value.toString();
  const moduloVal = convertStr.length % 2;
  return moduloVal === 1
    ? convertStr === convertStr.split("").reverse().join("")
    : false;
};
/* Solve Problem using BuiltIn Methods */

/* Solve Problem without using BuiltIn Methods */
// const isPalindrome = (value) => {
//   const convertStr = value.toString();
//   const moduloVal = convertStr.length % 2;
//   const halfStrLength = Math.floor(convertStr.length / 2);
//   let checkIsPalindrone = false;

//   if (moduloVal === 1) {
//     for (i = 1; i <= halfStrLength; i++) {
//       if (
//         convertStr[halfStrLength - i].toLowerCase() ===
//           convertStr[halfStrLength + i].toLowerCase() ||
//         convertStr[halfStrLength - i] === " " ||
//         convertStr[halfStrLength + i] === ""
//       ) {
//         checkIsPalindrone = true;
//       } else {
//         checkIsPalindrone = false;
//       }
//     }
//   } else {
//     checkIsPalindrone = false;
//   }
//   return checkIsPalindrone;
// };

/* Solve Problem without using BuiltIn Methods */

console.log("Case1", isPalindrome(12321));
console.log("Case2", isPalindrome("Was it a car or a cat I saw"));
