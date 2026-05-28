# Day 14 — Timeout Cancellation

**LeetCode Link:** https://leetcode.com/problems/timeout-cancellation/

**Difficulty:** Easy

**Topic:** Promises / setTimeout / Closures

---

## Problem Statement

> Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.
> If `cancelFn` is invoked before `t` ms, cancel the execution of `fn`. Otherwise, execute `fn` with `args`.

## Examples

```
Input:  fn = (x) => x * 5, args = [2], t = 20, cancelTimeMs = 50
Output: [{"time": 20, "returned": 10}]
→ cancelFn called at 50ms, fn already ran at 20ms ✅

Input:  fn = (x) => x**2, args = [2], t = 100, cancelTimeMs = 50
Output: []
→ cancelFn called at 50ms, fn was scheduled at 100ms → cancelled ❌
```

## Constraints

- 20 <= t <= 1000
- 10 <= cancelTimeMs <= 1000
