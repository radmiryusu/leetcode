function insert(intervals: number[][], newInterval: number[]): number[][] {
    let result = [];

    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0]);

    result.push(intervals[0]);

    for (let i = 0; i < intervals.length; i++) {
        if (result[result.length - 1][1] >= intervals[i][0]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};