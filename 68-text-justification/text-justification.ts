function fullJustify(words: string[], maxWidth: number): string[] {
    let line = 0;
    let list = []
    let lineText = []
    let lineLength = 0

    const convertArrayToString = (array, isLast) => {
        if (array.length === 1)return array[0].padEnd(maxWidth, ' ')
        if(isLast) return array.join(' ').padEnd(maxWidth, ' ')

        const textLength = array.reduce((arg, val)=> arg + val.length,0)
        let index = 0;
        let needStep = maxWidth - textLength

        while(needStep > 0){
            if(index < array.length - 1){
                array[index] = array[index] + ' '
                index += 1
                needStep -= 1;
            }else{
                index = 0;
            }
        }
        return array.join('');
    }

    for (let i = 0; i < words.length; i += 1) {
        if (lineLength + words[i].length <= maxWidth) {
            lineLength += words[i].length + 1;
            lineText.push(words[i]);
            continue;
        }
        list.push(convertArrayToString(lineText, false))
        lineText = [words[i]];
        lineLength = words[i].length + 1;
    }
    if (lineText.length) list.push(convertArrayToString(lineText, true))
    return list;
};