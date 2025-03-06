function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }

    let index = 1;
    let isHasCopied = false;

    for (let i = 1; i < nums.length; i += 1) {
        const isEqual = nums[i - 1] === nums[i]
        if (isEqual && isHasCopied) continue;

        isHasCopied = isEqual ? true : false
        nums[index] = nums[i]
        index += 1;
    }
    return index
};