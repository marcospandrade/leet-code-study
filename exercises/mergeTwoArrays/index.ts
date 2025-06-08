const nums1 = [1, -2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, -5, 6, 0];
const n = 3;

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const mNumbers = nums1.splice(m);
  const nNumbers = nums2.splice(n);
  nums1.push(...nums2);

  nums1.sort((a, b) => a - b);
  console.log(nums1);
}

merge(nums1, m, nums2, n);
