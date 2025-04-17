
/* Thats not valid solution because of complexity O(n**2)
var productExceptSelf = function(nums) {

    nums = nums.map((value, index) => {
        let initial = 1
        let i = index + 1;
        let j = index - 1;

        while (nums[i] || nums[i] === 0) {
            if (!initial) {
                break
            }
            initial *= nums[i]
            i++
        }

        while(nums[j] || nums[j] === 0) {
            if (!initial) {
                break
            }
            initial *= nums[j]
            j--
        }
        
        return initial
    })
    return nums

};

*/

var productExceptSelf = function(nums) {
    const prefix = [];
    const postfix = [];

    // building prefix
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefix.push(1)
        } else {
            prefix.push(nums[i - 1] * prefix[i - 1])
        }
    }

    // building postfix
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            postfix[i] = 1
        } else {
            postfix[i] = nums[i + 1] * postfix[i + 1]
        }
    }

    nums = nums.map((val, index) => {
        return prefix[index] * postfix[index]
    })
    return nums
};

