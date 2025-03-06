function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let index = 0; index < ransomNote.length; index++) {
        let start = magazine.length
        magazine = magazine.replace(ransomNote[index], '')

        if (start === magazine.length) return false
    }
    return true
};