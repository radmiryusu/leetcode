function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b);
    let n = citations.length;

    for (let index = 0; index < citations.length; index++) {
        if (citations[index] < citations.length - index) continue;
        return citations.length - index;
    }


    return 0;
};