function distinctDifferenceArray(nums: number[]): number[] {
    const prefix = []
    const size = nums.length
    const suffix = nums;

    const output = []
    for (let i = 0; i < size; i++) {
        prefix.push(suffix.shift());
        const suffixCheck = new Set(suffix)
        const prefixCheck = new Set(prefix)
        const diff = prefixCheck.size - suffixCheck.size
        output.push(diff)
    }

    return output;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));