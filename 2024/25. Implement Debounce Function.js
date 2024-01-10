//create debounce function
//debounce funciton must work one time for example 1 time submitting the form but this code strangely working 4 time

const debounce = (func, timeout = 300) =>{
    let timer;
    return (...args) => {
        console.log("inner fn", args );
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this, args)
        }, timeout)
    }
}

const saveInput = (name) => {
    console.log("saveInput", name);    
}

const processChange = debounce(saveInput, 2000);
processChange("foo")
processChange("foo")
processChange("foo")
processChange("foo")
