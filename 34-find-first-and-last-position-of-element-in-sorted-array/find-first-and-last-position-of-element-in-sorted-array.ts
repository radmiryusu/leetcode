function searchRange(nums: number[], target: number): number[] {
    let start = 0;
    let end = nums.length - 1;
    const indexList = []

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (nums[start] === target) {
            indexList.push(start)
            start++;
            continue;
        }

        if (nums[middle] > target) {
            end = middle - 1;
        }
        if (nums[middle] < target) {
            start = middle + 1;
            continue;
        }
        start++;
    }
    
    if (indexList.length === 0) return [-1, -1];
    else if (indexList.length === 1) return [indexList[0], indexList[0]]
    return [indexList[0], indexList[indexList.length - 1]];
};