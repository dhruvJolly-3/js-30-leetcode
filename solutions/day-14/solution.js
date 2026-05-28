/**
 * Day 14 — Timeout Cancellation
 * LeetCode: https://leetcode.com/problems/timeout-cancellation/
 * Difficulty: Easy
 * Topic: setTimeout / clearTimeout / Closures
 *
 * Approach:
 * - Schedule fn with setTimeout → get timerId (like a receipt)
 * - Return cancelFn that calls clearTimeout(timerId)
 * - clearTimeout cancels the scheduled fn if called before t ms
 * - timerId accessible in cancelFn via CLOSURE
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
var cancellable = function(fn, args, t) {
    let timerId = setTimeout(() => fn(...args), t);
    return function cancelFn() {
        clearTimeout(timerId);
    }
}

// 📝 Note:
// setTimeout returns a timerId — like a receipt number
// clearTimeout(timerId) = cancel that specific scheduled task
// timerId is accessible in cancelFn via CLOSURE
// Closure = inner function can access outer function variables!

// Test
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, 50); // cancelled too late — fn already ran at 20ms
