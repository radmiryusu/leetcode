function isArraySpecial(nums: number[]): boolean {
    return nums.every((item, index, arr) => {
        return index === arr.length - 1 || (item + arr[index + 1]) % 2 !== 0;
    });
};