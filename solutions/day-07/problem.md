# Day 07 — Array Reduce Transformation

**LeetCode Link:** https://leetcode.com/problems/array-reduce-transformation/

**Difficulty:** Easy

**Topic:** Array / Higher Order Functions

---

## Problem Statement

> Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by executing the `fn` function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
> **Do not use the built-in `Array.reduce` method.**

## Examples

```
Input:  nums = [1,2,3,4], fn = (accum, curr) => accum + curr, init = 0
Output: 10

Input:  nums = [1,2,3,4], fn = (accum, curr) => accum + curr * curr, init = 100
Output: 130

Input:  nums = [], fn = () => 0, init = 25
Output: 25
```

## Constraints

- 0 <= nums.length <= 1000
- 0 <= nums[i] <= 1000
- 0 <= init <= 1000
