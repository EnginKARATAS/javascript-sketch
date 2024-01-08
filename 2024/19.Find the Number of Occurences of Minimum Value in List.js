//find the number of occurences of minimum value in the list

const minRepeatTime = (arr)=>{
    const min = Math.min(...arr);
    const minCount = arr.filter(x=>x === min).length;
    return minCount
}
console.log(minRepeatTime([1,2,3,4,5,1,1,1,2]));