function maxVowels(s: string, k: number): number {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    let currentVowels = 0;
    let maxVowels = 0;

    for (let i = 0; i < k; i++) {
        if (vowelSet.has(s[i])) currentVowels++
    }
    maxVowels = currentVowels;

    for (let i = k; i < s.length; i++) {
        if (vowelSet.has(s[i])) currentVowels++;
        if (vowelSet.has(s[i - k])) currentVowels--;

        maxVowels = Math.max(maxVowels, currentVowels);
    }

    return maxVowels;
};