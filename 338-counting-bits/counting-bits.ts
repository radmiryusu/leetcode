function countBits(n: number): number[] {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    const bits: number[] = [0, 1];

    for (let i = 2; i <= n; i++) {
        bits.push(bits[Math.floor(i / 2)] + i % 2);
    }
    return bits;
};