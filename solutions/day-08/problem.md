# Day 08 — Function Composition

**LeetCode Link:** https://leetcode.com/problems/function-composition/

**Difficulty:** Easy

**Topic:** Array / Higher Order Functions / Closures

---

## Problem Statement

> Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function that is the function composition of the array of functions.
> The function composition of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.
> The function composition of an empty list of functions is the identity function `f(x) = x`.

## Examples

```
Input:  functions = [x => x+1, x => x*x, x => 2*x], x = 4
Output: 65
Explanation: right to left → 2*4=8, 8*8=64, 64+1=65

Input:  functions = [x => 10*x, x => 10*x, x => 10*x], x = 1
Output: 1000

Input:  functions = [], x = 42
Output: 42
```

## Constraints

- -1000 <= x <= 1000
- 0 <= functions.length <= 1000
