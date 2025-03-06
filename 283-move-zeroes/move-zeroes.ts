function moveZeroes(nums: number[]): void {
    let step = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0) continue;

        [nums[step], nums[j]] = [nums[j], nums[step]]
        step += 1
    }
};