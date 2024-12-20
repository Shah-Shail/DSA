// Question 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

const reverseString = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
};

console.log("Case1", reverseString("hello"));
console.log("Case2", reverseString("racecar"));
