var groupAnagrams = function(strs) {
    const obj = {};
    const list = [];
    for (let i = 0; i < strs.length; i++) {
        if (obj[Array.from(strs[i]).sort().toString()]) {
            obj[Array.from(strs[i]).sort().toString()].push(strs[i])
        } else {
            obj[Array.from(strs[i]).sort().toString()] = [strs[i]];
        }
    }

    for (let key in obj) {
        list.push(obj[key]);
    }

    return list
};