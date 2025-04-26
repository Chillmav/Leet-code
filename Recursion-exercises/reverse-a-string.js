
// slice solution (below more efficient solution)
// function reverseString(str) {
//     if (!str[0]) return ""
//     return str[str.length - 1] + reverseString(str.slice(0, -1))
// }

// console.log(reverseString('kebab'))

function reverseString1(str, index = str.length - 1) {
    if (index < 0) return '';
    return str[index] + reverseString1(str, index - 1)
}

console.log(reverseString1('kebab'));