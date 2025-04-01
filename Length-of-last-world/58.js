var lengthOfLastWord = function(s) {
    let num = 0;
    if (s.length === 0) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for(let j = s.length - 1; j > -1; j--) {
        if (s[j] !== " ") {
            while (s[j] !== " ") {
                num++
                j--
            }
            return num;
        } 
    }


};


console.log(lengthOfLastWord("a"));