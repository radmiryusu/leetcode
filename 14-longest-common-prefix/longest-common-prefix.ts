function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return ''
    if (strs.length <= 1) return strs[0]

    const word = strs[0]
    let sliceWord = ''

    for (let i = 0; i < word.length; i += 1) {
        const reqText = word.slice(0, i + 1)
        const req = new RegExp(`^${reqText}`)

        const list = strs.filter(text => req.test(text))
        
        if (list.length !== strs.length) return sliceWord
        sliceWord = reqText
    }
    return sliceWord
};