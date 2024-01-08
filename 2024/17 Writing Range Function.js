//create range function
const range = (start, end) =>{
    const rangeArr = []
    for(i=start; i<=end; i++)
        rangeArr.push(i)
    return rangeArr;
}
console.log(range(33,50));

const range2 = (start, end) => {
    return [...Array(end-start).keys()].map(item=>item+start)
}
console.log(range2(33,50));