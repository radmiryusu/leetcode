function isPalindrome(x: number): boolean {
    return String(x).split('').reverse().join('') === String(x);
};