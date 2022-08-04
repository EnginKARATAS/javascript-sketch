//
//fibonacci
//
//0,1,1,2,3,5,8,13,21... givin n

function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));

//
//palindrome
//
let isPalindrome = (text) => {
  //fof
  return text === text.split("").reverse().join("");
};
console.log(isPalindrome("fof"))
console.log(isPalindrome("foo"))