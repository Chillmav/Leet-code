var isAnagram = function(s, t) {
    const hashS = {}; 
    const hashT = {};
    if (s.length !== t.length) {
        return false
    }
    for(let i = 0; i < s.length; i++) {
        if (hashS[s[i]]) {
            hashS[s[i]]++;
        } else {
            hashS[s[i]] = 1;
        }
        if (hashT[t[i]]) {
            hashT[t[i]]++;
        } else {
            hashT[t[i]] = 1;
        }  
    }
    for (let key in hashS) {
        if (hashS[key] !== hashT[key]) {
            return false
        }
    }
    return true
};