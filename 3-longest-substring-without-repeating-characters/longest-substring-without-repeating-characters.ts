function lengthOfLongestSubstring(s: string): number {
  let mapList = new Map<string, number>();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (mapList.has(char) && mapList.get(char)! >= left) {
      left = mapList.get(char)! + 1;
    }

    mapList.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
/*
// second variant
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
};*/