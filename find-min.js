var findMin = function(nums) {

    let start = 0;
    let end = nums.length - 1;
    let res = nums[0];
    while (start <= end) {

        if (nums[start] <= nums[end]) {
         return Math.min(res, nums[start])
        }

        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= nums[start]) {
            start = mid + 1;
         } else {
            res = nums[mid];
            end = mid - 1
        }

    }
    return res
};