var isAnagram = function(s, t) {

    s = s.split('').sort();
    t = t.split('').sort();

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false
        }
    }
    if (s.length === t.length) {
        return true
    }
    return false
    
};