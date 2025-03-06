function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i += 1) {
        if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
        else map.set(nums[i], 1)
    }
    
    for (let entry of map) {
        if (entry[1] === 1) return entry[0];
    }

    return 0;
};