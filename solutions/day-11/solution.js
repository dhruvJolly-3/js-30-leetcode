/**
 * Day 11 — Memoize
 * LeetCode: https://leetcode.com/problems/memoize/
 * Difficulty: Medium
 * Topic: Closures / Caching
 *
 * Approach:
 * - Use a cache to store previously computed results
 * - Key = args converted to string (eg: [2,2] → "2,2")
 * - If key exists in cache → return cached value (fn not called again)
 * - If key not in cache → call fn, store result, return result
 *
 * Time Complexity: O(1) for cached calls
 * Space Complexity: O(n) for cache storage
 */

// ✅ Solution 1 — Using Object
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

// ✅ Solution 2 — Using Map
function memoize(fn) {
    let cache = new Map();
    return function(...args) {
        let key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = fn(...args);
            cache.set(key, result);
            return result;
        }
    }
}

// 📝 Note:
// Object  → cache[key], key in cache, cache[key] = val
// Map     → cache.get(key), cache.has(key), cache.set(key, val)
// Map is slightly better — designed for key-value storage, better performance
// args.toString() still needed even with Map — arrays cant be used as keys directly!

// Test
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // 4 (fn called)
console.log(memoizedSum(2, 2)); // 4 (cached!)
console.log(memoizedSum(1, 2)); // 3 (fn called again)
