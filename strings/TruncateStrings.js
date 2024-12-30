// Question 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to DilSeDeveloper" , maxlength=9
// Output: "Subscribe…"

/*First Approch*/
const truncateString = (str, maxLength) => {
  if (str.length > maxLength) return str.slice(0, maxLength) + "...";
  else return str;
};
/*First Approch*/

/*Second Approch*/
// const truncateString = (str, maxLength) => {
//   return str.length <= maxLength ? str : `${str.substring(0, maxLength)}...`;
// };
/*Second Approch*/

console.log("Case 1>>>>", truncateString("Subscribe to DilSeDeveloper", 3));
console.log("Case 2>>>>", truncateString("Shail", 5));
