var longestConsecutive = function(nums) {

    const set = new Set(nums);
    let sequenceLength = 1;
    let maxLength = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            while (set.has(num + 1)) {
                 
                    sequenceLength++;
                    num++  
            }           
            if (sequenceLength > maxLength) {
                maxLength = sequenceLength;
                }

        }
        sequenceLength = 1;
    }
    
    return maxLength

};