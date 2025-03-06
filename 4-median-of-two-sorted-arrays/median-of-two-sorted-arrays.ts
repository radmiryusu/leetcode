function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let list = [...nums1, ...nums2].sort((a, b) => a - b)
    const median = Math.floor(list.length / 2)

    if (list.length % 2 === 1) return list[median];
    return (list[median] + list[median - 1]) / 2
};