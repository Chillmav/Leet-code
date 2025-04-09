var topKFrequent = function(nums, k) {
    let map = new Map();
    const finalList = [];
    for (let num of nums) {

        if (map.has(num)) {

            map.set(num, map.get(num) + 1)

        } else {

            map.set(num, 1)

        };

    };


    const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {

        finalList.push(sortedMap[i][0])

    }
    return finalList
};

console.log(topKFrequent([1,1,1,2,2,3], 2))