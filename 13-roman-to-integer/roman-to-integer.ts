const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
function romanToInt(s) {
    const list = s.split('')
    let value = 0;

    for (let i = 0; i < list.length; i += 1) {
        const vl = Roman[list[i]]
        const nextVl = Roman[list[i + 1]]

        if (nextVl && nextVl > vl) {
            value += nextVl - vl;
            i++;
        }
        else value += vl
    }

    return value;
}