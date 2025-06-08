# 🧠 Intuition
We're given a **sorted** array and asked to **remove duplicates in-place**, returning the new length of the modified array. Since the array is sorted, any duplicates will appear **consecutively**—making it easy to identify and skip them during iteration.

---

# 🔍 Approach
We use the **two-pointer technique**:
- `i` iterates through every element starting from index `1`.
- `index` keeps track of the **next position to insert a unique element**.

During iteration:
- If `nums[i] !== nums[i - 1]`, it means we've found a new unique number.
- We place it at `nums[index]` and increment `index`.

At the end of the loop, `index` represents the count of unique elements, and the first `index` positions in `nums` contain the deduplicated result.

---

# ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$  
  We perform a single pass through the array.

- **Space Complexity:**  
  $$O(1)$$  
  Everything is done in-place without allocating extra space.

---

# ✅ Code
```typescript
function removeDuplicates(nums: number[]): number {
    let index = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}
```

# 🙌 Final Thoughts
This elegant solution takes full advantage of the array being sorted and uses just two pointers to achieve the goal in-place and in linear time.

If this helped you, don't forget to give it an upvote!
Your support helps others find high-quality explanations too. 🚀

Happy Leetcoding! 😄