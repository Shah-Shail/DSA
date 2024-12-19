// Question 3 : Given an integer x, return true if x is a palindrome,
// and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

/* first approch */
// const isPalindrome = (str) => {
//   str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
//   const len = str.length;

//   if (len <= 1) return true;
//   if (str[0] !== str[len - 1]) return false;

//   return isPalindrome(str.slice(1, -1));
// };
/* first approch */

// console.log("Case1", isPalindrome("12321"));
// console.log("Case2", isPalindrome("Was it a car or a cat I saw"));

/* second approch */
const checkPalindrome = (str, i) => {
  if (i > str.length / 2) {
    return true;
  }

  return str[i] === str[str.length - i - 1] && checkPalindrome(str, i + 1);
};
/* second approch */

console.log("Case1", checkPalindrome("12321", 0));
console.log("Case2", checkPalindrome("Was it a car or a cat I saw", 0));
