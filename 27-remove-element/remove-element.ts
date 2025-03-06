function removeElement(nums: number[], val: number): number {
      let index = 0;
    for(let i = 0; i < nums.length; i+=1){
        if(nums[i] === val) continue;
        nums[index] = nums[i]
        index+=1;
    }
    return index
};