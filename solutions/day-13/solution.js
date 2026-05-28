/**
 * Day 13 — Sleep
 * LeetCode: https://leetcode.com/problems/sleep/
 * Difficulty: Easy
 * Topic: Promises / Async / setTimeout
 *
 * Approach:
 * - Return a new Promise
 * - Inside Promise, use setTimeout to call resolve after millis ms
 * - resolve() completes the Promise after the delay
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

// 📝 Note:
// new Promise gives us resolve function automatically
// setTimeout(resolve, millis) = "call resolve after millis ms"
// resolve() = Promise ka "done" button
// Without wrapping in new Promise, setTimeout cant be awaited!

// Test
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // ~100
});
