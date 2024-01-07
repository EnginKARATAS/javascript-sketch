//Remove all duplicates in the array
const arr = [1, 1, 2, 6, 4, 4, 6, 5, 1, 3, 7, 3, 3, 1];

//v1 with set, duplications could write one line
const removeDuplicationArr2 = (arr) =>{
    return [...new Set(arr)]
}
console.log(removeDuplicationArr2(arr))
//v2 with logic 
const removeDuplicationArr=(arr) =>{
    const arrContainer = [...arr];
    const newArr = []
    arrContainer.forEach(x=>{
        if(!newArr.some(newArrElement => newArrElement === x))  
            newArr.push(x)
    })
    return newArr.sort((a,b)=>a-b)
}
console.log(removeDuplicationArr(arr));