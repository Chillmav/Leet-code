var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');

    for (let j = 0; j < s.length / 2; j++) {
        if (s[j] !== s[s.length - j - 1]) {
            return false
        }
    }

    return true
};