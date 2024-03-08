/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeoutId;
    return function (...args) {
        if (timeoutId)
            clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), t)
        // clear and run always, when last func will comes, execute last one
        //execute fn args after t sec

    }
}; 

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */