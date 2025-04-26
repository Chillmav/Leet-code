const recursionSum = function (arr, index = 0) {
    if (index === arr.length) return 0
    return arr[index] + recursionSum(arr, index + 1)
}

console.log(recursionSum([1,2,3,4]))