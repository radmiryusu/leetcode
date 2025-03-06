function majorityElement(nums: number[]): number {
    let counter = 1;
    let candidate = nums[0];

    for (let i = 1; i <= nums.length - 1; i++) {
        const number = nums[i];

        if (candidate === number) {
            counter++;
            continue;
        }
        if (counter === 1) candidate = number
        else counter--;

    }

    return candidate
};