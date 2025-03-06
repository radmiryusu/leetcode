function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[right] + numbers[left] === target) {
            return [left + 1, right + 1]
        }
        
        if (numbers[right] + numbers[left] < target) {
            left += 1
        } else {
            right -= 1;
        }
    }
};