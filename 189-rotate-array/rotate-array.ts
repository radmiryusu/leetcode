function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    if (k === 0) return;

    const rotatedPart = nums.splice(-k); // Берем последние k элементов
    nums.unshift(...rotatedPart); // Добавляем их в начало массива
};