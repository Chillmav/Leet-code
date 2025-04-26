function isPalindrome(str, index = 0) {

    const rightIndex = str.length - index - 1;

    if (index > Math.floor(str.length / 2)) return true;
    
    if (str[index] !== str[rightIndex]) return false;
    
    return isPalindrome(str, index + 1);
}

