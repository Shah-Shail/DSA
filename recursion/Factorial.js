// Question 1 : Factorial of n
// Input:  n = 5  ----->>>>>  Output: 120

const calculateFactorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
};

console.log("Case 1 >>>", calculateFactorial(5));
console.log("Case 2 >>>", calculateFactorial(10));
