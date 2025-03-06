function maxProfit(prices: number[]): number {
    let min = prices[0]
    let count = 0;

    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] < min) min = prices[i]
        else if (min < prices[i]) {
            count += prices[i] - min;
            min = prices[i];
        }
    }
    return count;
};