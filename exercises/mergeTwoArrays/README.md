# 🧠 Intuition
The goal is to merge two sorted arrays—`nums1` and `nums2`—into `nums1`, which already has enough space to hold all elements. JavaScript provides convenient array methods like `splice()` and `sort()`, which we can leverage for a clean and readable solution.

---

# 🔍 Approach
1. Use `splice(m)` to remove the trailing placeholders (typically zeros) from `nums1`, leaving only the actual `m` elements.
2. Use `splice(n)` to ensure we only consider the first `n` elements of `nums2` (optional in many cases).
3. Use `push(...nums2)` to merge `nums2` into `nums1`.
4. Use `.sort((a, b) => a - b)` to sort the merged array in non-decreasing order.

While this approach may not be the most efficient in terms of performance, it prioritizes **readability**, **simplicity**, and **correctness**, which are often valued in interviews and introductory algorithm challenges.

---

# ⏱️ Complexity

- **Time Complexity:**  
  $$O((m + n) \log(m + n))$$  
  Sorting dominates the overall time complexity.

- **Space Complexity:**  
  $$O(1)$$  
  We're modifying the array in-place without using additional space proportional to the input size.

---

# ✅ Code
```typescript
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const mNumbers = nums1.splice(m); // Remove unused elements
    const nNumbers = nums2.splice(n); // Trim excess from nums2 (optional)
    nums1.push(...nums2);             // Merge arrays
    nums1.sort((a, b) => a - b);      // Sort in-place
}
```


# 🙌 Final Thoughts
This solution is clean and makes excellent use of JavaScript features. It’s a great fit for quick prototyping or interview questions where performance isn't the top concern.

If you found this explanation helpful, please consider giving it an upvote! 🚀
Happy coding! 💻✨


