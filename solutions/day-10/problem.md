# Day 10 — Allow One Function Call

**LeetCode Link:** https://leetcode.com/problems/allow-one-function-call/

**Difficulty:** Easy

**Topic:** Closures

---

## Problem Statement

> Given a function `fn`, return a new function that ensures `fn` is called at most once.
> - First call → returns same result as `fn`
> - Every subsequent call → returns `undefined`

## Examples

```
Input:  fn = (a,b,c) => (a+b+c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]

Input:  fn = (a,b,c) => (a*b*c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
```

## Constraints

- 1 <= calls.length <= 10
