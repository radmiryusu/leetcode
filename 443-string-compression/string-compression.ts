function compress(chars: string[]): number {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char;
        if (count <= 1) continue;

        const countStr = count.toString();
        for (let c of countStr) {
            chars[write++] = c;
        }

    }

    return write;
};