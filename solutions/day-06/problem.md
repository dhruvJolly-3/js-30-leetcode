# Day 06 — Filter Elements from Array

**LeetCode Link:** https://leetcode.com/problems/filter-elements-from-array/

**Difficulty:** Easy

**Topic:** Array / Higher Order Functions

---

## Problem Statement

> Given an integer array `arr` and a filter function `fn`, return a filtered array.
> An element in the array should be included if `fn(arr[i], i)` evaluates to a truthy value.
> **Do not use the built-in `Array.filter` method.**

## Examples

```
Input:  arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]

Input:  arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]

Input:  arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1; }
Output: [-2,-1,1,2]
```

## Constraints

- 0 <= arr.length <= 1000
- -10^9 <= arr[i] <= 10^9
