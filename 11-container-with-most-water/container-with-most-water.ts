function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let count = 0;

    while (left < right) {
        const width = right - left
        const minHeight = Math.min(height[left], height[right])

        count = Math.max((minHeight * width), count)

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return count;
};