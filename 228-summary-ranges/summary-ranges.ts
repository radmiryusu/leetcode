function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];

    const result = [];
    let start = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            continue;
        }

        if (start === nums[i]) result.push(`${start}`);
        else result.push(`${start}->${nums[i]}`);

        if (i + 1 < nums.length) start = nums[i + 1];
    }

    return result;
};