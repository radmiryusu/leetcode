function searchInsert(nums: number[], target: number): number {
    if (nums.length == 0) return 0;
    if (nums[nums.length - 1] < target) return nums.length

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target || nums[i] > target) return i

        if (i == nums.length - 1) return nums.length;
    }
};