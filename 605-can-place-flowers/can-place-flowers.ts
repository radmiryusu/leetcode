function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i += 1) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {

            flowerbed[i] = 1;
            count++;

            if (count >= n) return true;
        }
    }
    return count >= n;

};