function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);

    const pairs = [];

    function binarySearch(target, spellStrength) {
        let low = 0;
        let high = potions.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (potions[mid] * spellStrength < target) low = mid + 1;
            else high = mid - 1;
        }
        return low;
    }

    for (let i = 0; i < spells.length; i++) {
        const spellStrength = spells[i];
        const index = binarySearch(success, spellStrength);
        pairs.push(potions.length - index);
    }

    return pairs;
};