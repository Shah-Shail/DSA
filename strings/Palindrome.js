// Question 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

/* Brut Force Approch */
// const isPalindromeNumber = function (x) {
//   return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// };
/* Brut Force Approch */

/*Optimised Approch*/
const isPalindromeNumber = (num) => {
  if (num < 0) {
    return false;
  } else {
    const convertStr = num.toString();
    const halfNum = Math.floor(convertStr.length / 2);
    for (let i = 0; i < halfNum; i++) {
      if (convertStr[i] !== convertStr[convertStr.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
};
/*Optimised Approch*/

console.log("Case 1>>>>", isPalindromeNumber(12321));
console.log("Case 2>>>>", isPalindromeNumber(-122));
