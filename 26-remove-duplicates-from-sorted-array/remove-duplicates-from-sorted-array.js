/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i - 1] === nums[i]) continue;
        nums[index] = nums[i]
        index += 1;
    }
    return index
};