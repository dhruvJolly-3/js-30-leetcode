# Day 11 — Memoize

**LeetCode Link:** https://leetcode.com/problems/memoize/

**Difficulty:** Medium

**Topic:** Closures / Caching

---

## Problem Statement

> Given a function `fn`, return a memoized version of that function.
> A memoized function will never be called twice with the same inputs — instead it returns a cached value.

## Examples

```
Input:  fnName = "sum", actions = ["call","call","getCallCount","call","getCallCount"]
        values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]

Input:  fnName = "factorial", values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
```

## Constraints

- 0 <= a, b <= 10^5
- 1 <= n <= 10
- 1 <= actions.length <= 10^5
