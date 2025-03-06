type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const args = await Promise.all([promise1,promise2])
    return args[0] + args[1]
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */