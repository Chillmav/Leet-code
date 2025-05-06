class SlidingWindow {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int l = 0;
        int r = 1;
        while (r < prices.length) {
            profit = Math.max(prices[r] - prices[l], profit);
            if (prices[l] >= prices[r]) {
                l = r;
            }
            r++; 
        }
        return profit;
    }
}

