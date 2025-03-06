function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    const mag = magazine.split('')
    for (const char of ransomNote) {
        const i = mag.indexOf(char)
        if (i === -1) return false
        mag[i] = ''
    }

    return true
};