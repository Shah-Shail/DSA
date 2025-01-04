// Question 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

// Variation 1: Given two strings x and y, return the Hamming distance between them.

/* Without Binary Convert Solution */
// const findHammingDistance = (x, y) => {
//   let hammingDistance = 0;
//   if (x.length !== y.length) {
//     throw new Error("Strings must be of same length");
//   }
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) {
//       hammingDistance++;
//     }
//   }
//   return hammingDistance;
// };
// /* Without Binary Convert Solution */

// console.log("Case 1>>>>", findHammingDistance("hello", "hwllr"));
// console.log("Case 2>>>>", findHammingDistance("hello", "he"));

// Variation 2: Given two integers x and y, return the Hamming distance between thier bits.
/* With Binary Convert Solution */
const findHammingDistance = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);

  let hammingDistance = 0;

  if (x.length < y.length) {
    while (x.length !== y.length) x = "0" + x;
  } else {
    while (x.length !== y.length) y = "0" + y;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      hammingDistance++;
    }
  }
  return hammingDistance;
};
/* Without Binary Convert Solution */

console.log("Case 1>>>>", findHammingDistance(2, 9));
console.log("Case 2>>>>", findHammingDistance(21, 21));
