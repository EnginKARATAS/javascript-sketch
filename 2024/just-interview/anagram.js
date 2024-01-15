// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”

//v1 (engin(ne yanlış? stringleri karşılaştırabilirsin))
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();
  let loopResult = false;
  arr1.forEach((item, i) => {
    if (arr1[i] !== arr2[i]) loopResult = false;
    else loopResult = true;
  });
  return loopResult
};

//v2

const isAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const txt1 = str1.split("").sort().join("");
    const txt2 = str2.split("").sort().join("");
    return txt1 === txt2
};