var romanToInt = function(s) {

    let value = 0;
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        "C": 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
            if (obj[s[i]] < obj[s[i + 1]]) {
                value += obj[s[i + 1]] - obj[s[i]];
                i++;
            } else {
                value += obj[s[i]]
            }
        } 

    return value
}


/*
var romanToInt = function(s) {

    let value = 0;
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        "C": 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        if (i !== s.length - 1) {
            if (obj[s[i]] < obj[s[i + 1]]) {
                value += obj[s[i + 1]] - obj[s[i]];
                i++;
            } else {
                value += obj[s[i]]
            }
        } else {
            value += obj[s[i]]
        }
    }
    return value
};


console.log(romanToInt('DCXXI'));

*/