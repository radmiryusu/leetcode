function isPalindrome(s: string): boolean {
  // First, create a clean version of the string with only alphanumeric characters
  // and convert to lowercase
  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Use two pointers: one from the start and one from the end
  let left = 0;
  let right = cleanStr.length - 1;

  // Compare characters from both ends moving inward
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};