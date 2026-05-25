/**
 * Day 10 — Allow One Function Call
 * LeetCode: https://leetcode.com/problems/allow-one-function-call/
 * Difficulty: Easy
 * Topic: Closures
 *
 * Approach:
 * - Track whether fn has been called using a boolean `called`
 * - First call: set called = true, return fn(...args)
 * - Every subsequent call: return undefined
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
var once = function(fn) {
    let called = false;
    return function(...args) {
        if (called === false) {
            called = true;
            return fn(...args);
        } else {
            return undefined;
        }
    }
};

// 📝 Note:
// called is captured in closure — persists across multiple calls
// ...args collects all arguments and spreads them into fn
// return undefined is actually optional — JS returns undefined by default
// but explicit is always clearer!

// Test
const onceFn = once((a, b, c) => a + b + c);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
console.log(onceFn(4, 5, 6)); // undefined
