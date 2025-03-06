class RecentCounter {
  size = 3000;
  queue: number[] = [];

  constructor() {}

  ping(time: number) {
    this.queue.push(time);
    const diff = time - this.size;

    while (this.queue[0] < diff) {
        this.queue.shift();
    }

    return this.queue.length;
  }
}