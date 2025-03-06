function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let result = Infinity

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]

        while (sum >= target) {
            result = Math.min(result, i - left + 1)
            sum = sum - nums[left]
            left++
        }
    }

    return result === Infinity ? 0 : result
};