function createCounter(n: number): () => number {
    let index = 0;
    return function() {
        let count = n + index;
        index++
        return count;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */