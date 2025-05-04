var search = function(nums, target) {

    l = 0;
    r = nums.length - 1;

    while (l <= r) {

        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) {
            return m
        } 
        // left sorted portion
        if (nums[m] >= nums[l]) {
            if (target > nums[m]) {
                l = m + 1
            } else if (target >= nums[l]) {
                r = m - 1
            } else if (target < nums[l]) {
                l = m + 1
            }
        // right sorted portion
        } else {
            if (target < nums[m]) {
                r = m - 1
            } else if (target > nums[r]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
    }
    return -1
};