function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }

    let index = 1;
    let isCopy = false;

    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i - 1] === nums[i]) {
            if (isCopy) continue;

            nums[index] = nums[i]
            isCopy = true;
            index += 1;
            continue;
        }

        isCopy = false;
        nums[index] = nums[i]
        index += 1;
    }
    return index
};