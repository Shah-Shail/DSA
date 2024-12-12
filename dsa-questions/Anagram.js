// Question 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// A different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>> Output: true;
// Input: (s = "rat"), (t = "car"); ----->>>> Output: false;

/* Solve Problem using Built In Method */
// const isAnagram = (str, anagramStr) => {
//   str = str.split("").sort().join("");
//   anagramStr = anagramStr.split("").sort().join("");

//   return str === anagramStr;
// };
/* Solve Problem using Built In Method */

/* Solve Problem using Object */
const isAnagram = (str, anagramStr) => {
  if (str.length !== anagramStr.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str.length; i++) {
    obj1[str[i]] = (obj1[str[i]] || 0) + 1;
    obj2[anagramStr[i]] = (obj2[anagramStr[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};
/* Solve Problem using Object */

console.log("Case 1>>>", isAnagram("anagram", "nagaram"));
console.log("Case 2>>>", isAnagram("rat", "car"));
