let array = "da2kr3a2"

let longest = ""
for (let i = 0; i < array.length; i++) {
    console.log("🚀 ~ i:", i)
    let val1 = array[i];
    for (let k = i+1; k < array.length; k++) {
        let val2 = array[k];
        if(val1 === val2){
            longest += val2
            i++
            k++
            val1 = array[++i]
            val2 = array[++k]
            if (val2!=val1) {
                break
            }
        }
    }
}
console.log(longest);