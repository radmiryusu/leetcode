function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let accum = new Map()

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        
        if (!accum.has(num)) {
            accum.set(num, i)
            continue;
        }

        if (Math.abs(i - accum.get(num)) <= k) return true
        else accum.set(num, i)

    }
    return false;
};