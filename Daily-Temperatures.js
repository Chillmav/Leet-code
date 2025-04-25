var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0)
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
            const popped = stack.pop();
            result[popped[1]] = i - popped[1];

        }
        stack.push([temperatures[i], i])
    }
    return result
};