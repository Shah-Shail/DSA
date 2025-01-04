// Question 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

/* Brut Force Approch */
// const isAnagram = (str1, str2) => {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");

//   return str1 === str2;
// };
/* Brut Force Approch */

/* Optimised Approch */
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};
/* Optimised Approch */

console.log("Case1", isAnagram("anagram", "nagaram"));
console.log("Case2", isAnagram("rat", "car"));
