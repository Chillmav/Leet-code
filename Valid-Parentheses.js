/* Brute Force
var isValid = function(s) {
    while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
        s = s.replace('()', '');
        s = s.replace('{}', '');
        s = s.replace('[]', '');
    }
    return s === ''
};
*/

/* stack
var isValid = function(s) {
    const stack = [];

    const validation = {

        "}": '{',
        ']': '[',
        ')': '('
    };

    while (s.length) {

        const element = s.charAt(0);
        s = s.slice(1);

        if (element in validation) {
            if (stack.length === 0 || stack[stack.length - 1] !== validation[element]) {
                return false
            }
            stack.pop()
        } else {

            stack.push(element)

        }

    }
    return stack.length === 0
};

*/