// Question 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

/* Stack Approch */
const reverseStrWords = (str) => {
  const splitStr = str.split(" ");
  const stack = [];

  for (let i of splitStr) {
    stack.push(i);
  }

  let finalStr = "";

  while (stack.length) {
    const currentStr = stack.pop();

    if (currentStr) {
      finalStr += " " + currentStr;
    }
  }

  return finalStr.trim();
};
/* Stack Approch */

// Time Complexity = O(n)
// Space Complexity = O(n)

console.log("Case 1 >>>", reverseStrWords("the sky is blue"));
console.log("Case 2 >>>", reverseStrWords("a good   example"));
