var divideArray = function(nums) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hash.get(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            hash.set(nums[i], hash.get(nums[i]) + 1) 
        }
    }
    let answer = true
    for (const [key, value] of hash) {
        if (value % 2 != 0) {
            answer = false
        }
    }
    return answer
};
