const palindrome = (str)=> str === str.split("").reverse().join("");
console.log(palindrome("ses"));
console.log(palindrome("yes"));