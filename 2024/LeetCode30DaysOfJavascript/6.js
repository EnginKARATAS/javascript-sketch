/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const items = []
    arr.forEach((item, i) => {
        if (fn(arr[i]))
            items.push(item)
    })

    if (items.length === 0)
        items.push(1)
    return items;
};