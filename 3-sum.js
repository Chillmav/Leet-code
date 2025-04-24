var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)
    const finalList = []

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue

        let j = i + 1;
        let k = nums.length - 1
        
        while (j < k) {

            let sum = nums[i] + nums[k] + nums[j]

            if (sum === 0) {
                finalList.push([nums[j], nums[i], nums[k]])
                j++
                k--
                while (j < k && nums[j] === nums[j - 1]) j++; // skip duplicate j
                while (j < k && nums[k] === nums[k + 1]) k--; // skip duplicate k

            } else {

                if (sum > 0) {
                        k--
                    } else {
                        j++
                    }
            }

            

            
        }
    }
    return finalList

};