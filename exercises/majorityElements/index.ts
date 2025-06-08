// function majorityElement(nums: number[]): number {
//     const majorityMap = new Map<number, number>();
//     for (let i = 0; i < nums.length; i++) {
//         const value = majorityMap.get(nums[i]);
//         if (value) {
//             majorityMap.set(nums[i], value + 1);
//         } else {
//             majorityMap.set(nums[i], 1);
//         }
//     }

//     let majorityCount = 0;
//     majorityMap.forEach((value, key) => {
//         if (value > nums.length / 2) {
//             majorityCount = key;
//         }
//     });

//     return majorityCount;
// }

function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([3, 2, 3])); // Example usage
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Another example usage
