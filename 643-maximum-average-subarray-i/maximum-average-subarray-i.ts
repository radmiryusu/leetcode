function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
};