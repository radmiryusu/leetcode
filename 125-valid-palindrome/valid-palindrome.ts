function isPalindrome(s: string): boolean {
    const getter = new Set([':', ",", " ", '.', '@', '#', '_'])
    const words = s.toLowerCase().split(/\W|_/).filter((word) => !getter.has(word))
    const reverseWords = [...words].reverse().map((word) => word.split('').reverse().join(''))
    return words.join('') === reverseWords.join('')
};