// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

const isPalindrome = (value) => {
  const convertStr = value.toString();
  const moduloVal = convertStr.length % 2;
  const halfStrLength = Math.floor(convertStr.length / 2);
  let checkIsPalindrone = false;

  if (moduloVal === 1) {
    for (i = 1; i <= halfStrLength; i++) {
      if (
        convertStr[halfStrLength - i].toLowerCase() ===
          convertStr[halfStrLength + i].toLowerCase() ||
        convertStr[halfStrLength - i] === " " ||
        convertStr[halfStrLength + i] === ""
      ) {
        checkIsPalindrone = true;
      } else {
        checkIsPalindrone = false;
      }
    }
  } else {
    checkIsPalindrone = false;
  }
  return checkIsPalindrone;
};

console.log("isPalindrome", isPalindrome("Was it a car or a cat I saw"));
