// Question 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3 ------>>>>>> Output: 2

/* Solve Problem with recursion */
const calculateFibonacciSeries = (fibonacciNum) => {
  if (fibonacciNum < 0) {
    return "Enter Proper Fibonacci Number";
  } else {
    return fibonacciNum <= 1
      ? fibonacciNum
      : calculateFibonacciSeries(fibonacciNum - 1) +
          calculateFibonacciSeries(fibonacciNum - 2);
  }
};
/* Solve Problem with recursion */

console.log("Case 1 :>> ", calculateFibonacciSeries(-10));
console.log("Case 2 :>> ", calculateFibonacciSeries(0));
console.log("Case 3 :>> ", calculateFibonacciSeries(4));
