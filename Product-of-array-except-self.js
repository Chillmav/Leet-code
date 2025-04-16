
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

