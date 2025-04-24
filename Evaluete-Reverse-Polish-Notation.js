var evalRPN = function(tokens) {
    const stack = [];

    for (let number of tokens) {
        if (Number(number) || Number(number) === 0) {
            stack.push(Number(number))
        } else {
            const a = stack.pop()
            const b = stack.pop()
            if (number === '+') {
                stack.push(b + a)
            } else if (number === '-') {
                stack.push(b - a)
            } else if (number === '*') {
                stack.push(b * a)
            } else {
                if (b / a > 0) {
                    stack.push(Math.floor(b / a))
                } else {
                    stack.push((Math.round(b / a) < b / a) ? Math.round(b / a) + 1 : Math.round(b / a))
                }
                
            }
        }
    }
    return stack.pop()
};