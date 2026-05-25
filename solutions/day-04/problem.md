# Day 04 — Counter II

**LeetCode Link:** https://leetcode.com/problems/counter-ii/

**Difficulty:** Easy

**Topic:** Closures / Objects

---

## Problem Statement

> Write a function `createCounter` that accepts an initial integer `init` and returns an object with three functions:
> - `increment()` — increases current value by 1 and returns it
> - `decrement()` — decreases current value by 1 and returns it
> - `reset()` — resets current value to `init` and returns it

## Examples

```
Input:  init = 5, calls = ["increment","reset","decrement"]
Output: [6, 5, 4]

Input:  init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1, 2, 1, 0, 0]
```

## Constraints

- -1000 <= init <= 1000
