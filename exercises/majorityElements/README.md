# 🧠 Intuition
We're asked to find the element that appears **more than ⌊n / 2⌋ times** in a list of size `n`. This implies there's always **exactly one such element** guaranteed to exist.

My first thought was: brute-force with a hash map is easy, but not optimal.

Then I remembered the **Boyer-Moore Voting Algorithm**, a brilliant linear-time and constant-space trick for this exact problem.

---

# 🔍 Approach
### Boyer-Moore Voting Algorithm
The core idea is:
- We maintain a `candidate` and a `count`.
- As we iterate, if `count` is `0`, we **choose** the current number as a new candidate.
- For each number:
  - If it matches the `candidate`, increment `count`.
  - Otherwise, decrement `count`.

Why does this work?
- Because the majority element appears more than all others *combined*, every time we cancel out a majority vote with a minority, the majority survives till the end.

At the end of the loop, the `candidate` holds the majority element.

---

# ⏱️ Complexity

- **Time Complexity:**  
  $$O(n)$$  
  We traverse the array once.

- **Space Complexity:**  
  $$O(1)$$  
  No extra space is used—just two variables (`count` and `candidate`).

---

# ✅ Code
```typescript
function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = 0;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
}
```

# 🙌 Final Thoughts
This is one of those rare clever and efficient algorithms that feels almost magical once you understand it. ✨

If this helped you, please upvote! It encourages quality solutions to shine 🌟
Happy coding! 😄