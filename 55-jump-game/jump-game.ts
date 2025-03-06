function canJump(nums: number[]): boolean {
    let fth = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > fth) return false;

        fth = Math.max(fth, i + nums[i]);

        if (fth >= nums.length - 1) return true;
    }

    return false;
};