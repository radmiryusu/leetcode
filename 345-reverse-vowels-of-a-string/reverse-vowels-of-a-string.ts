function reverseVowels(s: string): string {
  const set = new Set(["a","e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const arr = s.split("");
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 <= p2) {
    if (set.has(arr[p1]) && set.has(arr[p2])) {
      const t = s[p1];
      arr[p1] = s[p2];
      arr[p2] = t;

      p1 += 1;
      p2 -= 1;
    }

    if (!set.has(s[p1])) {
      p1 += 1
    }

    if (!set.has(s[p2])) {
      p2 -= 1;
    }
  }

  return arr.join("");
};