/**
 * Day 02 — Counter
 * LeetCode: https://leetcode.com/problems/counter/
 * Difficulty: Easy
 * Topic: Closures
 *
 * Approach:
 * - Return an arrow function that returns n and then post-increments it
 * - n++ returns current value FIRST, then increments (post-increment)
 * - This is exactly what we need — return n, then bump it up
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
var createCounter = function(n) {
  return () => {
    return n++;
  }
}

// 📝 Note:
// n++ (post-increment) = return n first, THEN n = n + 1
// ++n (pre-increment)  = n = n + 1 first, THEN return n
// Post-increment is the key here!

// Test
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
