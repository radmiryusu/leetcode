function findMin(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    let left = 0;
    let right = nums.length - 1;
    let value = 0;
    
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (nums[middle] < nums[right] && nums[middle] < nums[left]) {
            value = nums[middle]
            left += 1;
            right -= 1;
            continue;
        }

        if (nums[right] < nums[left]) {
            left = middle + 1;
            value = nums[right]
            continue;
        }
        if (nums[left] < nums[right]) {
            right = middle - 1;
            value = nums[left]
            continue;
        }
        if (nums[middle] < value) {
            value = nums[middle]
        }
        left += 1;
    }
    return value;
};