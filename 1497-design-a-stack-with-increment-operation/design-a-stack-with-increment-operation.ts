var CustomStack = function (maxSize) {
    this.array = []
    this.maxSize = maxSize;
};
CustomStack.prototype.push = function (x) {
    if (this.array.length >= this.maxSize) return;

    this.array = !this.array.length ? [x] : [...this.array, x]
};
CustomStack.prototype.pop = function () {
    if (!this.array.length) return -1
    
    const lastIndex = this.array.length - 1
    const lastValue = this.array[lastIndex]

    this.array = this.array.filter((item, index) => index < lastIndex)

    return lastValue
};
CustomStack.prototype.increment = function (k, val) {
    this.array = this.array.map((item, index) => index <= k - 1 ? item + val : item)
};