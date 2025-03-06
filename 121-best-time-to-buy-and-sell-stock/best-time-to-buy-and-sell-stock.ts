function maxProfit(prices: number[]): number {
    if (prices.length === 1) return 0;

    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        else if (prices[i] > minPrice) maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
};