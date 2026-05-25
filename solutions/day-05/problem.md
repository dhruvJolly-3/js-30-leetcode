# Day 05 — Apply Transform Over Each Element in Array

**LeetCode Link:** https://leetcode.com/problems/apply-transform-over-each-element-in-array/

**Difficulty:** Easy

**Topic:** Array / Higher Order Functions

---

## Problem Statement

> Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.
> The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.
> **Do not use the built-in `Array.map` method.**

## Examples

```
Input:  arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]

Input:  arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]

Input:  arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
```

## Constraints

- 0 <= arr.length <= 1000
- -10^9 <= arr[i] <= 10^9
