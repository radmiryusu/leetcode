function lengthOfLongestSubstring(s: string): number {
    const st = new Set([])

    for (let i = 0; i < s.length; i += 1) {
        const symbol = s[i]
        
        if (st.has(symbol)) {
            return Math.max(st.size, lengthOfLongestSubstring(s.slice(1)))
        }
        st.add(symbol)

    }
    return st.size;
};