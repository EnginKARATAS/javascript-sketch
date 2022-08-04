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

// console.log(fibonacci(5));

//
//palindrome
//
let isPalindrome = (text) => {
  //fof
  return text === text.split("").reverse().join("");
};
// console.log(isPalindrome("fof"));
// console.log(isPalindrome("foo"));

//
//Anagram
//
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  const str1Lower = str1.toLowerCase()
  const str2Lower = str2.toLowerCase()

  if (str1Lower == str2Lower) {
    return false
  }

  const str1AlphabeticSort = str1Lower.split("").sort((a,b)=>a>b?1:-1).join("")
  const str2AlphabeticSort = str2Lower.split("").sort((a,b)=>a>b?1:-1).join("")
  if (str1AlphabeticSort === str2AlphabeticSort) {
    return true
  }
  return false
  
};
console.log(anagram("engin","engni"))
