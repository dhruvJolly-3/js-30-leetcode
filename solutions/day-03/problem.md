# Day 03 — To Be Or Not To Be

**LeetCode Link:** https://leetcode.com/problems/to-be-or-not-to-be/

**Difficulty:** Easy

**Topic:** Closures / Objects

---

## Problem Statement

> Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:
> - `toBe(val)` — returns `true` if val === the original value, else throws `"Not Equal"`
> - `notToBe(val)` — returns `true` if val !== the original value, else throws `"Equal"`

## Examples

```
Input:  expect(5).toBe(5)
Output: true

Input:  expect(5).notToBe(5)
Output: throws "Equal"
```

## Constraints

- val can be any JS value
