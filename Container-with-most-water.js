var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1
    while (i < j) {
        const volume = (j - i) * Math.min(height[i], height[j])
        if (volume > max) {
            max = volume
        };
        if (height[i] >= height[j]) {
            j--
        } else {
            i++
        }
    }
    return max
};