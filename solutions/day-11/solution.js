/**
 * Day 11 — Memoize
 * LeetCode: https://leetcode.com/problems/memoize/
 * Difficulty: Medium
 * Topic: Closures / Caching
 *
 * Approach:
 * - Use a cache object to store previously computed results
 * - Key = args converted to string (eg: [2,2] → "2,2")
 * - If key exists in cache → return cached value (fn not called again)
 * - If key not in cache → call fn, store result, return result
 *
 * Time Complexity: O(1) for cached calls
 * Space Complexity: O(n) for cache storage
 */

// ✅ My Solution
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = args.toString();
        if (key in cache) {
            return cache[key];
        } else {
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}

// 📝 Note:
// args.toString() converts [2,2] → "2,2" — unique key for each input combo
// "key in cache" checks if key EXISTS in object
// result = fn(...args) — call fn first, THEN store in cache
// cache[key] = result — store for future calls
// This is exactly how memoization works in real apps (React useMemo, etc.)

// Test
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // 4 (fn called)
console.log(memoizedSum(2, 2)); // 4 (cached!)
console.log(memoizedSum(1, 2)); // 3 (fn called again)
