//my solution
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    let counter = 0
    let results = []
    return new Promise((resolve, reject) => {
        functions.forEach(func => {
            func().then((res) => {
                counter++
                results.push(res)
                if (counter === functions.length)
                    resolve(results)
            }).catch(err => reject(err))
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */