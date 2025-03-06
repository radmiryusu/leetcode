function minFlips(a: number, b: number, c: number): number {
    let flips = 0;

    for (let i = 0; i < 32; i++) {
        const bitA = (a >> i) & 1;
        const bitB = (b >> i) & 1;
        const bitC = (c >> i) & 1;

        if (bitC === 1) {
            if (bitA === 0 && bitB === 0) flips += 1;
            continue;
        }

        if (bitA === 1) flips += 1;
        if (bitB === 1) flips += 1;
    }

    return flips;
};