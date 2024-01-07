// Write a function which can concatenate 2 arrays
//v1
function concatArrays(arr1, arr2){
    return [...arr1, ...arr2]
}
//v2
function concatArrays2(arr1, arr2){
    return arr1.concat(arr2)
}

const beautifulArr = [1,2];
console.log("🚀 ~ file: 12Concatenating Arrays.js:4 ~ concatArrays ~ concatArrays:", concatArrays2(beautifulArr, [3]))
console.log("🚀 ~ file: 12Concatenating Arrays.js:12 ~ beautifulArr:", beautifulArr)
console.log("🚀 ~ file: 12Concatenating Arrays.js:4 ~ concatArrays ~ concatArrays:", concatArrays(beautifulArr, [3]))
console.log("🚀 ~ file: 12Concatenating Arrays.js:12 ~ beautifulArr:", beautifulArr)
 