function uniqueOccurrences(arr: number[]): boolean {
    const unique = new Map()
    for (let i = 0; i < arr.length; i += 1) {
        const key = arr[i]
        unique.set(key, (unique.get(key) || 0) + 1)
    }
    return unique.size === new Set(unique.values()).size
};